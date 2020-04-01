module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__(1);

      /***/
    },
    /* 1 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _deserialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        2
      );
      /* harmony reexport (safe) */ __webpack_require__.d(
        __webpack_exports__,
        "deserialize",
        function () {
          return _deserialize__WEBPACK_IMPORTED_MODULE_0__["deserialize"];
        }
      );

      /***/
    },
    /* 2 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "deserialize",
        function () {
          return deserialize;
        }
      );
      /* harmony import */ var _flattenAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        3
      );
      /* harmony import */ var _mapRelationships__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        4
      );
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(source, true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            );
          } else {
            ownKeys(source).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              );
            });
          }
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }

      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }

      var deserialize = function deserialize(resp) {
        var _resp$data = resp.data,
          data = _resp$data === void 0 ? {} : _resp$data,
          included = resp.included,
          rest = _objectWithoutProperties(resp, ["data", "included"]);

        var deserialized;

        if (Array.isArray(data)) {
          deserialized = data.map(function (resource) {
            return Object(
              _mapRelationships__WEBPACK_IMPORTED_MODULE_1__["mapRelationships"]
            )(resource, included);
          });
        } else {
          deserialized = Object(
            _mapRelationships__WEBPACK_IMPORTED_MODULE_1__["mapRelationships"]
          )(data, included);
        }

        return _objectSpread(
          {
            data: deserialized,
          },
          rest
        );
      };

      /***/
    },
    /* 3 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "flattenAttributes",
        function () {
          return flattenAttributes;
        }
      );
      function _typeof(obj) {
        if (
          typeof Symbol === "function" &&
          typeof Symbol.iterator === "symbol"
        ) {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
        }
        return _typeof(obj);
      }

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(source, true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            );
          } else {
            ownKeys(source).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              );
            });
          }
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }

      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }

      var asAttributes = function asAttributes(_ref) {
        var attributes = _ref.attributes,
          rest = _objectWithoutProperties(_ref, ["attributes"]);

        if (!attributes || attributes.constructor !== Object) return rest;
        return _objectSpread({}, rest, {}, attributes);
      };

      var flattenAttributes = function flattenAttributes(data) {
        if (!data || _typeof(data) !== "object") return {};
        if (Array.isArray(data))
          return data.map(function (el) {
            return asAttributes(el);
          });
        return asAttributes(data);
      };

      /***/
    },
    /* 4 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "mapRelationships",
        function () {
          return mapRelationships;
        }
      );
      /* harmony import */ var _flattenAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        3
      );
      function _slicedToArray(arr, i) {
        return (
          _arrayWithHoles(arr) ||
          _iterableToArrayLimit(arr, i) ||
          _nonIterableRest()
        );
      }

      function _nonIterableRest() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      }

      function _iterableToArrayLimit(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
          for (
            var _i = arr[Symbol.iterator](), _s;
            !(_n = (_s = _i.next()).done);
            _n = true
          ) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }
        return _arr;
      }

      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(source, true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            );
          } else {
            ownKeys(source).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              );
            });
          }
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }

      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }

      var findResource = function findResource(rel, included) {
        if (!Array.isArray(included)) return;
        return included.find(function (res) {
          return res.id === rel.id && res.type === rel.type;
        });
      };

      var deserializeIncluded = function deserializeIncluded(rel, included) {
        var resource = findResource(rel, included);
        if (!resource) return [];
        var filteredIncluded = included.map(function (res) {
          if (res !== resource) return res;

          var relationships = resource.relationships,
            filter = _objectWithoutProperties(resource, ["relationships"]);

          return filter;
        });
        return [
          _objectSpread(
            {},
            rel,
            {},
            Object(
              _flattenAttributes__WEBPACK_IMPORTED_MODULE_0__[
                "flattenAttributes"
              ]
            )(resource)
          ),
          filteredIncluded,
        ];
      };

      var mapRelationships = function mapRelationships(resource, included) {
        var relationships = resource.relationships,
          result = _objectWithoutProperties(resource, ["relationships"]);

        if (resource.hasOwnProperty("attributes")) {
          result = Object(
            _flattenAttributes__WEBPACK_IMPORTED_MODULE_0__["flattenAttributes"]
          )(result);
        }

        for (var key in relationships) {
          if (result.hasOwnProperty(key)) continue;
          var relData = relationships[key].data;
          var deserializedRel = void 0;

          if (relData && Array.isArray(relData)) {
            (function () {
              var includedRels = [];
              relData.forEach(function (rel) {
                var dRel;

                var _deserializeIncluded = deserializeIncluded(rel, included);

                var _deserializeIncluded2 = _slicedToArray(
                  _deserializeIncluded,
                  2
                );

                dRel = _deserializeIncluded2[0];
                included = _deserializeIncluded2[1];
                if (dRel) includedRels.push(dRel);
              });
              includedRels = includedRels.map(function (rel) {
                return mapRelationships(rel, included);
              });
              if (includedRels.length) deserializedRel = includedRels;
            })();
          } else if (relData) {
            var _deserializeIncluded3 = deserializeIncluded(relData, included),
              _deserializeIncluded4 = _slicedToArray(_deserializeIncluded3, 1),
              dRel = _deserializeIncluded4[0];

            if (dRel) {
              deserializedRel = mapRelationships(dRel, included);
            }
          }

          if (deserializedRel) result[key] = deserializedRel;
        }

        return result;
      };

      /***/
    },
    /******/
  ]
);
