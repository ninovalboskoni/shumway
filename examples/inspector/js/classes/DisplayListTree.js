/* -*- Mode: js; js-indent-level: 2; indent-tabs-mode: nil; tab-width: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */
/*
 * Copyright 2013 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DisplayListTree = (function() {

  var containerElement;
  var rootElement;
  var propertiesElement;
  var hoveredElement;
  var selectedElement;
  var selectedItem;
  var boundClickListener;
  var boundMouseOverListener;
  var boundFocusListener;
  var boundBlurListener;
  var boundKeyDownListener;
  var displayObjectStore;

  var displayObjectProps = [
    "_name",
    "alpha",
    "blendMode",
    "cacheAsBitmap",
    "height",
    "scaleX",
    "scaleY",
    "visible",
    "width"
  ];

  function findItemElement(el) {
    while (el && el !== rootElement) {
      if (el.classList.contains("item")) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }

  function updateProperties(displayObject) {
    if (isNullOrUndefined(displayObject)) {
      containerElement.classList.remove("hasProperties");
      propertiesElement.innerHTML = "";
    } else {
      containerElement.classList.add("hasProperties");
      var innerHTML = "";
      for (var i = 0, n = displayObjectProps.length; i < n; i++) {
        innerHTML += '<div>' + displayObjectProps[i] + ': ' + displayObject[displayObjectProps[i]] + '</div>';
      }
      propertiesElement.innerHTML = innerHTML;
    }
  }

  function createLabel(displayObject) {
    var div = document.createElement("div");
    div.className = "item";
    div.textContent = displayObject.class.className + " ";
    if (!isNullOrUndefined(displayObject._name)) {
      var spanName = document.createElement("span");
      spanName.textContent = "'" + displayObject._name + "'";
      spanName.className = "doName";
      div.appendChild(spanName);
    }
    if (flash.display.MovieClip.class.isInstanceOf(displayObject)) {
      var spanFrameInfo = document.createElement("span");
      spanFrameInfo.textContent = displayObject._currentFrame + "/" + displayObject._totalFrames;
      spanFrameInfo.className = "mcFrameInfo";
      div.appendChild(spanFrameInfo);
    }
    return div;
  }

  function updateChildren(item, elItemContainer) {
    var li = document.createElement("li");

    var label = createLabel(item);
    label.dataset.dosidx = displayObjectStore.length;
    li.appendChild(label);

    displayObjectStore.push(item);

    // If item is container, iterate over its children and recurse
    if ((flash.display.DisplayObjectContainer.class.isInstanceOf(item) ||
         flash.display.SimpleButton.class.isInstanceOf(item)) &&
        item._children &&
        item._children.length > 0)
    {
      var ul = document.createElement("ul");
      var children = item._children;
      for (var i = 0, n = children.length; i < n; i++) {
        if (children[i]) {
          updateChildren(children[i], ul);
        }
      }
      li.appendChild(ul);
    }

    elItemContainer.appendChild(li);
  }

  var DisplayListTree = function() {}

  DisplayListTree.prototype = {

    update: function updateDom(stage, container) {
      displayObjectStore = [];

      containerElement = container;
      containerElement.innerHTML = "";

      var displayListRoot = document.createElement("div");
      displayListRoot.setAttribute("id", "displayListRoot");

      this._removeEventListeners(rootElement);

      rootElement = document.createElement("div");
      rootElement.setAttribute("id", "displayList");
      rootElement.setAttribute("tabindex", "6");
      rootElement.addEventListener("click", boundClickListener);
      rootElement.addEventListener("mouseover", boundMouseOverListener);
      rootElement.appendChild(displayListRoot);

      this._addEventListeners(rootElement);

      propertiesElement = document.createElement("div");
      propertiesElement.setAttribute("id", "displayObjectProperties");

      updateChildren(stage, displayListRoot);

      containerElement.appendChild(rootElement);
      containerElement.appendChild(propertiesElement);

      if (selectedItem) {
        var dosidx = displayObjectStore.indexOf(selectedItem);
        if (dosidx > -1) {
          selectedElement = document.querySelector("#displayListRoot .item[data-dosidx=\"" + dosidx + "\"]");
          selectedElement.classList.add("selected");
        } else {
          selectedItem = null;
          selectedElement = null;
        }
      }

      updateProperties(selectedItem);
    },

    _onClick: function _onClick(event) {
      var el = findItemElement(event.target);
      if (el) {
        // CLICK
        if (selectedElement) {
          selectedElement.classList.remove("selected");
        }
        if (el !== selectedElement || (selectedElement && !event.metaKey && !event.altKey)) {
          // SELECT
          selectedElement = el;
          selectedElement.classList.add("selected");
          selectedItem = displayObjectStore[parseInt(el.dataset.dosidx)];
          updateProperties(selectedItem);
        } else if (selectedElement) {
          // UNSELECT
          selectedElement = null;
          selectedItem = null;
          updateProperties();
        }
      }
    },

    _onMouseOver: function _onMouseOver(event) {
      var el = findItemElement(event.target);
      if (el) {
        if (el !== hoveredElement) {
          // OVER
          hoveredElement = el;
        }
      } else {
        // OUT
        hoveredElement = null;
      }
    },

    _onFocus: function _onFocus(event) {
      boundKeyDownListener = this._onKeyDown.bind(this);
      event.target.addEventListener('keydown', boundKeyDownListener, false);
    },

    _onBlur: function _onBlur(event) {
      if (boundKeyDownListener) {
        event.target.removeEventListener("keydown", boundKeyDownListener);
      }
    },

    _onKeyDown: function _onBlur(event) {
      var dir = 0;
      switch (event.keyCode) {
        case 40:
          dir = 1;
          break;
        case 38:
          dir = -1;
          break;
      }
      if (dir != 0) {
        var dosidx = clamp(selectedElement ? +selectedElement.dataset.dosidx + dir : 0, 0, displayObjectStore.length - 1);
        var newSelectedItem = displayObjectStore[dosidx];
        if (selectedItem !== newSelectedItem) {
          if (selectedElement) {
            selectedElement.classList.remove("selected");
          }
          selectedItem = newSelectedItem;
          selectedElement = document.querySelector("#displayListRoot .item[data-dosidx=\"" + dosidx + "\"]");
          selectedElement.classList.add("selected");
          updateProperties(selectedItem);
        }
      }
    },

    _addEventListeners: function _addEventListeners(el) {
        boundClickListener = this._onClick.bind(this);
        boundMouseOverListener = this._onMouseOver.bind(this);
        boundFocusListener = this._onFocus.bind(this);
        boundBlurListener = this._onBlur.bind(this);
        el.addEventListener("click", boundClickListener);
        el.addEventListener("mouseover", boundMouseOverListener);
        el.addEventListener("focus", boundFocusListener);
        el.addEventListener("blur", boundBlurListener);
    },

    _removeEventListeners: function _removeEventListeners(el) {
      if (el) {
        if (boundClickListener) {
          el.removeEventListener("click", boundClickListener);
        }
        if (boundMouseOverListener) {
          el.removeEventListener("mouseover", boundMouseOverListener);
        }
        if (boundFocusListener) {
          el.removeEventListener("focus", boundFocusListener);
        }
        if (boundBlurListener) {
          el.removeEventListener("blur", boundBlurListener);
        }
        if (boundKeyDownListener) {
          el.removeEventListener("keydown", boundKeyDownListener);
        }
      }
    }

  };

  return DisplayListTree;

})();
