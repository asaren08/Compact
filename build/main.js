/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/gl-matrix/src/gl-matrix.js":
/*!*************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix.js ***!
  \*************************************************/
/*! exports provided: glMatrix, mat2, mat2d, mat3, mat4, quat, quat2, vec2, vec3, vec4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gl_matrix_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gl-matrix/common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "glMatrix", function() { return _gl_matrix_common_js__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _gl_matrix_mat2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gl-matrix/mat2.js */ "./node_modules/gl-matrix/src/gl-matrix/mat2.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2", function() { return _gl_matrix_mat2_js__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _gl_matrix_mat2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gl-matrix/mat2d.js */ "./node_modules/gl-matrix/src/gl-matrix/mat2d.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2d", function() { return _gl_matrix_mat2d_js__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _gl_matrix_mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gl-matrix/mat3.js */ "./node_modules/gl-matrix/src/gl-matrix/mat3.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat3", function() { return _gl_matrix_mat3_js__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _gl_matrix_mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gl-matrix/mat4.js */ "./node_modules/gl-matrix/src/gl-matrix/mat4.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return _gl_matrix_mat4_js__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _gl_matrix_quat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gl-matrix/quat.js */ "./node_modules/gl-matrix/src/gl-matrix/quat.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat", function() { return _gl_matrix_quat_js__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _gl_matrix_quat2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gl-matrix/quat2.js */ "./node_modules/gl-matrix/src/gl-matrix/quat2.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat2", function() { return _gl_matrix_quat2_js__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _gl_matrix_vec2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gl-matrix/vec2.js */ "./node_modules/gl-matrix/src/gl-matrix/vec2.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec2", function() { return _gl_matrix_vec2_js__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var _gl_matrix_vec3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gl-matrix/vec3.js */ "./node_modules/gl-matrix/src/gl-matrix/vec3.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec3", function() { return _gl_matrix_vec3_js__WEBPACK_IMPORTED_MODULE_8__; });
/* harmony import */ var _gl_matrix_vec4_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gl-matrix/vec4.js */ "./node_modules/gl-matrix/src/gl-matrix/vec4.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec4", function() { return _gl_matrix_vec4_js__WEBPACK_IMPORTED_MODULE_9__; });














/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/common.js":
/*!********************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/common.js ***!
  \********************************************************/
/*! exports provided: EPSILON, ARRAY_TYPE, RANDOM, setMatrixArrayType, toRadian, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSILON", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_TYPE", function() { return ARRAY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANDOM", function() { return RANDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatrixArrayType", function() { return setMatrixArrayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRadian", function() { return toRadian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
const EPSILON = 0.000001;
let ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
const RANDOM = Math.random;

/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}

const degree = Math.PI / 180;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
function toRadian(a) {
  return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
function equals(a, b) {
  return Math.abs(a - b) <= EPSILON*Math.max(1.0, Math.abs(a), Math.abs(b));
}


/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/mat2.js":
/*!******************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/mat2.js ***!
  \******************************************************/
/*! exports provided: create, clone, copy, identity, fromValues, set, transpose, invert, adjoint, determinant, multiply, rotate, scale, fromRotation, fromScaling, str, frob, LDU, add, subtract, exactEquals, equals, multiplyScalar, multiplyScalarAndAdd, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LDU", function() { return LDU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");


/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
function create() {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
function clone(a) {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */
function fromValues(m00, m01, m10, m11) {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */
function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    let a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function invert(out, a) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];

  // Calculate the determinant
  let det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] =  a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] =  a0 * det;

  return out;
}

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  let a0 = a[0];
  out[0] =  a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] =  a0;

  return out;
}

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function multiply(out, a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function rotate(out, a, rad) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = a0 *  c + a2 * s;
  out[1] = a1 *  c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
function scale(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let v0 = v[0], v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
}

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2]/a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}

/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return (Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  return out;
}

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
const mul = multiply;

/**
 * Alias for {@link mat2.subtract}
 * @function
 */
const sub = subtract;


/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/mat2d.js":
/*!*******************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/mat2d.js ***!
  \*******************************************************/
/*! exports provided: create, clone, copy, identity, fromValues, set, invert, determinant, multiply, rotate, scale, translate, fromRotation, fromScaling, fromTranslation, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");


/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
function create() {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
function clone(a) {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */
function fromValues(a, b, c, d, tx, ty) {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */
function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function invert(out, a) {
  let aa = a[0], ab = a[1], ac = a[2], ad = a[3];
  let atx = a[4], aty = a[5];

  let det = aa * ad - ab * ac;
  if(!det){
    return null;
  }
  det = 1.0 / det;

  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function multiply(out, a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}

/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function rotate(out, a, rad) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = a0 *  c + a2 * s;
  out[1] = a1 *  c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
function scale(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let v0 = v[0], v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
function translate(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let v0 = v[0], v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad), c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
          a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
}

/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}

/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
  return (Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a5), Math.abs(b5)));
}

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
const mul = multiply;

/**
 * Alias for {@link mat2d.subtract}
 * @function
 */
const sub = subtract;


/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/mat3.js":
/*!******************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/mat3.js ***!
  \******************************************************/
/*! exports provided: create, fromMat4, clone, copy, fromValues, set, identity, transpose, invert, adjoint, determinant, multiply, translate, rotate, scale, fromTranslation, fromRotation, fromScaling, fromMat2d, fromQuat, normalFromMat4, projection, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat2d", function() { return fromMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalFromMat4", function() { return normalFromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projection", function() { return projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");


/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create() {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
function clone(a) {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1], a02 = a[2], a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  let b01 = a22 * a11 - a12 * a21;
  let b11 = -a22 * a10 + a12 * a20;
  let b21 = a21 * a10 - a11 * a20;

  // Calculate the determinant
  let det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function adjoint(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  out[0] = (a11 * a22 - a12 * a21);
  out[1] = (a02 * a21 - a01 * a22);
  out[2] = (a01 * a12 - a02 * a11);
  out[3] = (a12 * a20 - a10 * a22);
  out[4] = (a00 * a22 - a02 * a20);
  out[5] = (a02 * a10 - a00 * a12);
  out[6] = (a10 * a21 - a11 * a20);
  out[7] = (a01 * a20 - a00 * a21);
  out[8] = (a00 * a11 - a01 * a10);
  return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  let b00 = b[0], b01 = b[1], b02 = b[2];
  let b10 = b[3], b11 = b[4], b12 = b[5];
  let b20 = b[6], b21 = b[7], b22 = b[8];

  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;

  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;

  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
  let a00 = a[0], a01 = a[1], a02 = a[2],
    a10 = a[3], a11 = a[4], a12 = a[5],
    a20 = a[6], a21 = a[7], a22 = a[8],
    x = v[0], y = v[1];

  out[0] = a00;
  out[1] = a01;
  out[2] = a02;

  out[3] = a10;
  out[4] = a11;
  out[5] = a12;

  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
  let a00 = a[0], a01 = a[1], a02 = a[2],
    a10 = a[3], a11 = a[4], a12 = a[5],
    a20 = a[6], a21 = a[7], a22 = a[8],

    s = Math.sin(rad),
    c = Math.cos(rad);

  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;

  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;

  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
  let x = v[0], y = v[1];

  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];

  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];

  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad), c = Math.cos(rad);

  out[0] = c;
  out[1] = s;
  out[2] = 0;

  out[3] = -s;
  out[4] = c;
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;

  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;

  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;

  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
function fromQuat(out, q) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;

  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;

  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;

  return out;
}

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
function normalFromMat4(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

  return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
function projection(out, width, height) {
    out[0] = 2 / width;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = -2 / height;
    out[5] = 0;
    out[6] = -1;
    out[7] = 1;
    out[8] = 1;
    return out;
}

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
          a[3] + ', ' + a[4] + ', ' + a[5] + ', ' +
          a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}



/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}

/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  out[6] = a[6] + (b[6] * scale);
  out[7] = a[7] + (b[7] * scale);
  out[8] = a[8] + (b[8] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] &&
         a[3] === b[3] && a[4] === b[4] && a[5] === b[5] &&
         a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
  return (Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
          Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a8), Math.abs(b8)));
}

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
const mul = multiply;

/**
 * Alias for {@link mat3.subtract}
 * @function
 */
const sub = subtract;


/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/mat4.js":
/*!******************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/mat4.js ***!
  \******************************************************/
/*! exports provided: create, clone, copy, fromValues, set, identity, transpose, invert, adjoint, determinant, multiply, translate, scale, rotate, rotateX, rotateY, rotateZ, fromTranslation, fromScaling, fromRotation, fromXRotation, fromYRotation, fromZRotation, fromRotationTranslation, fromQuat2, getTranslation, getScaling, getRotation, fromRotationTranslationScale, fromRotationTranslationScaleOrigin, fromQuat, frustum, perspective, perspectiveFromFieldOfView, ortho, lookAt, targetTo, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromXRotation", function() { return fromXRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromYRotation", function() { return fromYRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromZRotation", function() { return fromZRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function() { return fromRotationTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat2", function() { return fromQuat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaling", function() { return getScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotation", function() { return getRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScale", function() { return fromRotationTranslationScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScaleOrigin", function() { return fromRotationTranslationScaleOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frustum", function() { return frustum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspective", function() { return perspective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspectiveFromFieldOfView", function() { return perspectiveFromFieldOfView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ortho", function() { return ortho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookAt", function() { return lookAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetTo", function() { return targetTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");


/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}


/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1], a02 = a[2], a03 = a[3];
    let a12 = a[6], a13 = a[7];
    let a23 = a[11];

    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

  return out;
}

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
  out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
  out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
  out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
  out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
  out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
  return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  // Cache only the current line of the second matrix
  let b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
  out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
  out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
  out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
  return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
  let x = v[0], y = v[1], z = v[2];
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
    out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
    out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
  let x = v[0], y = v[1], z = v[2];

  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
  let x = axis[0], y = axis[1], z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;
  let b00, b01, b02;
  let b10, b11, b12;
  let b20, b21, b22;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) { return null; }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
  a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
  a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

  // Construct the elements of the rotation matrix
  b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
  b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
  b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

  // Perform rotation-specific matrix multiplication
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) { // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a10 = a[4];
  let a11 = a[5];
  let a12 = a[6];
  let a13 = a[7];
  let a20 = a[8];
  let a21 = a[9];
  let a22 = a[10];
  let a23 = a[11];

  if (a !== out) { // If the source and destination differ, copy the unchanged rows
    out[0]  = a[0];
    out[1]  = a[1];
    out[2]  = a[2];
    out[3]  = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a00 = a[0];
  let a01 = a[1];
  let a02 = a[2];
  let a03 = a[3];
  let a20 = a[8];
  let a21 = a[9];
  let a22 = a[10];
  let a23 = a[11];

  if (a !== out) { // If the source and destination differ, copy the unchanged rows
    out[4]  = a[4];
    out[5]  = a[5];
    out[6]  = a[6];
    out[7]  = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a00 = a[0];
  let a01 = a[1];
  let a02 = a[2];
  let a03 = a[3];
  let a10 = a[4];
  let a11 = a[5];
  let a12 = a[6];
  let a13 = a[7];

  if (a !== out) { // If the source and destination differ, copy the unchanged last row
    out[8]  = a[8];
    out[9]  = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function fromRotation(out, rad, axis) {
  let x = axis[0], y = axis[1], z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) { return null; }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  // Perform rotation-specific matrix multiplication
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromXRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = 1;
  out[1]  = 0;
  out[2]  = 0;
  out[3]  = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromYRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = c;
  out[1]  = 0;
  out[2]  = -s;
  out[3]  = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromZRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = c;
  out[1]  = s;
  out[2]  = 0;
  out[3]  = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {quat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */
function fromQuat2(out, a) {
  let translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  let bx = -a[0], by = -a[1], bz = -a[2], bw = a[3],
  ax = a[4], ay = a[5], az = a[6], aw = a[7];

  let magnitude = bx * bx + by * by + bz * bz + bw * bw;
  //Only scale if it makes sense
  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }
  fromRotationTranslation(out, a, translation);
  return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];

  return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];

  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

  return out;
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
function getRotation(out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  let trace = mat[0] + mat[5] + mat[10];
  let S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S;
    out[2] = (mat[1] - mat[4]) / S;
  } else if ((mat[0] > mat[5]) && (mat[0] > mat[10])) {
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S;
    out[2] = (mat[8] + mat[2]) / S;
  } else if (mat[5] > mat[10]) {
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S;
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S;
  } else {
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  let sx = s[0];
  let sy = s[1];
  let sz = s[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  let sx = s[0];
  let sy = s[1];
  let sz = s[2];

  let ox = o[0];
  let oy = o[1];
  let oz = o[2];

  let out0 = (1 - (yy + zz)) * sx;
  let out1 = (xy + wz) * sx;
  let out2 = (xz - wy) * sx;
  let out4 = (xy - wz) * sy;
  let out5 = (1 - (xx + zz)) * sy;
  let out6 = (yz + wx) * sy;
  let out8 = (xz + wy) * sz;
  let out9 = (yz - wx) * sz;
  let out10 = (1 - (xx + yy)) * sz;

  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;

  return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat(out, q) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;

  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;

  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;

  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;

  return out;
}

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
  let rl = 1 / (right - left);
  let tb = 1 / (top - bottom);
  let nf = 1 / (near - far);
  out[0] = (near * 2) * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = (near * 2) * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = (far * near * 2) * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
  let f = 1.0 / Math.tan(fovy / 2);
  let nf = 1 / (near - far);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = (2 * far * near) * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
  let upTan = Math.tan(fov.upDegrees * Math.PI/180.0);
  let downTan = Math.tan(fov.downDegrees * Math.PI/180.0);
  let leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0);
  let rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0);
  let xScale = 2.0 / (leftTan + rightTan);
  let yScale = 2.0 / (upTan + downTan);

  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = ((upTan - downTan) * yScale * 0.5);
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = (far * near) / (near - far);
  out[15] = 0.0;
  return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
  let lr = 1 / (left - right);
  let bt = 1 / (bottom - top);
  let nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
  let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  let eyex = eye[0];
  let eyey = eye[1];
  let eyez = eye[2];
  let upx = up[0];
  let upy = up[1];
  let upz = up[2];
  let centerx = center[0];
  let centery = center[1];
  let centerz = center[2];

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] &&
      Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] &&
      Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;

  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;

  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;

  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;

  return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
  let eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];

  let z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];

  let len = z0*z0 + z1*z1 + z2*z2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  let x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;

  len = x0*x0 + x1*x1 + x2*x2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
          a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
          a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' +
          a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  out[6] = a[6] + (b[6] * scale);
  out[7] = a[7] + (b[7] * scale);
  out[8] = a[8] + (b[8] * scale);
  out[9] = a[9] + (b[9] * scale);
  out[10] = a[10] + (b[10] * scale);
  out[11] = a[11] + (b[11] * scale);
  out[12] = a[12] + (b[12] * scale);
  out[13] = a[13] + (b[13] * scale);
  out[14] = a[14] + (b[14] * scale);
  out[15] = a[15] + (b[15] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] &&
         a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] &&
         a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] &&
         a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0  = a[0],  a1  = a[1],  a2  = a[2],  a3  = a[3];
  let a4  = a[4],  a5  = a[5],  a6  = a[6],  a7  = a[7];
  let a8  = a[8],  a9  = a[9],  a10 = a[10], a11 = a[11];
  let a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];

  let b0  = b[0],  b1  = b[1],  b2  = b[2],  b3  = b[3];
  let b4  = b[4],  b5  = b[5],  b6  = b[6],  b7  = b[7];
  let b8  = b[8],  b9  = b[9],  b10 = b[10], b11 = b[11];
  let b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];

  return (Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
          Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a8), Math.abs(b8)) &&
          Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a9), Math.abs(b9)) &&
          Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a10), Math.abs(b10)) &&
          Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a11), Math.abs(b11)) &&
          Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a12), Math.abs(b12)) &&
          Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a13), Math.abs(b13)) &&
          Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a14), Math.abs(b14)) &&
          Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a15), Math.abs(b15)));
}

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
const mul = multiply;

/**
 * Alias for {@link mat4.subtract}
 * @function
 */
const sub = subtract;


/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/quat.js":
/*!******************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/quat.js ***!
  \******************************************************/
/*! exports provided: create, identity, setAxisAngle, getAxisAngle, multiply, rotateX, rotateY, rotateZ, calculateW, slerp, invert, conjugate, fromMat3, fromEuler, str, clone, fromValues, copy, set, add, mul, scale, dot, lerp, length, len, squaredLength, sqrLen, normalize, exactEquals, equals, rotationTo, sqlerp, setAxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxisAngle", function() { return setAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAxisAngle", function() { return getAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateW", function() { return calculateW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slerp", function() { return slerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function() { return conjugate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat3", function() { return fromMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEuler", function() { return fromEuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotationTo", function() { return rotationTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlerp", function() { return sqlerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxes", function() { return setAxes; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/src/gl-matrix/mat3.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/src/gl-matrix/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/src/gl-matrix/vec4.js");





/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
function create() {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  let s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
function getAxisAngle(out_axis, q) {
  let rad = Math.acos(q[3]) * 2.0;
  let s = Math.sin(rad / 2.0);
  if (s != 0.0) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];

  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let by = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bz = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
function calculateW(out, a) {
  let x = a[0], y = a[1], z = a[2];

  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];

  let omega, cosom, sinom, scale0, scale1;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if ( cosom < 0.0 ) {
    cosom = -cosom;
    bx = - bx;
    by = - by;
    bz = - bz;
    bw = - bw;
  }
  // calculate coefficients
  if ( (1.0 - cosom) > 0.000001 ) {
    // standard case (slerp)
    omega  = Math.acos(cosom);
    sinom  = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;

  return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert(out, a) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let dot = a0*a0 + a1*a1 + a2*a2 + a3*a3;
  let invDot = dot ? 1.0/dot : 0;

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0*invDot;
  out[1] = -a1*invDot;
  out[2] = -a2*invDot;
  out[3] = a3*invDot;
  return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  let fTrace = m[0] + m[4] + m[8];
  let fRoot;

  if ( fTrace > 0.0 ) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0);  // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5/fRoot;  // 1/(4w)
    out[0] = (m[5]-m[7])*fRoot;
    out[1] = (m[6]-m[2])*fRoot;
    out[2] = (m[1]-m[3])*fRoot;
  } else {
    // |w| <= 1/2
    let i = 0;
    if ( m[4] > m[0] )
      i = 1;
    if ( m[8] > m[i*3+i] )
      i = 2;
    let j = (i+1)%3;
    let k = (i+2)%3;

    fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j*3+k] - m[k*3+j]) * fRoot;
    out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
    out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
  }

  return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */
function fromEuler(out, x, y, z) {
    let halfToRad = 0.5 * Math.PI / 180.0;
    x *= halfToRad;
    y *= halfToRad;
    z *= halfToRad;

    let sx = Math.sin(x);
    let cx = Math.cos(x);
    let sy = Math.sin(y);
    let cy = Math.cos(y);
    let sz = Math.sin(z);
    let cz = Math.cos(z);

    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;

    return out;
}

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
const clone = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["clone"];

/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
const fromValues = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["fromValues"];

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
const copy = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["copy"];

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
const set = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["set"];

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
const add = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["add"];

/**
 * Alias for {@link quat.multiply}
 * @function
 */
const mul = multiply;

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
const scale = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["scale"];

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
const dot = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["dot"];

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */
const lerp = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["lerp"];

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */
const length = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["length"];

/**
 * Alias for {@link quat.length}
 * @function
 */
const len = length;

/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
const squaredLength = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["squaredLength"];

/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
const sqrLen = squaredLength;

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
const normalize = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["normalize"];

/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
const exactEquals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["exactEquals"];

/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
const equals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["equals"];

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
const rotationTo = (function() {
  let tmpvec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["create"]();
  let xUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](1,0,0);
  let yUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](0,1,0);

  return function(out, a, b) {
    let dot = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["dot"](a, b);
    if (dot < -0.999999) {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, xUnitVec3, a);
      if (_vec3_js__WEBPACK_IMPORTED_MODULE_2__["len"](tmpvec3) < 0.000001)
        _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, yUnitVec3, a);
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
})();

/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */
const sqlerp = (function () {
  let temp1 = create();
  let temp2 = create();

  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));

    return out;
  };
}());

/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
const setAxes = (function() {
  let matr = _mat3_js__WEBPACK_IMPORTED_MODULE_1__["create"]();

  return function(out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];

    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];

    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];

    return normalize(out, fromMat3(out, matr));
  };
})();


/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/quat2.js":
/*!*******************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/quat2.js ***!
  \*******************************************************/
/*! exports provided: create, clone, fromValues, fromRotationTranslationValues, fromRotationTranslation, fromTranslation, fromRotation, fromMat4, copy, identity, set, getReal, getDual, setReal, setDual, getTranslation, translate, rotateX, rotateY, rotateZ, rotateByQuatAppend, rotateByQuatPrepend, rotateAroundAxis, add, multiply, mul, scale, dot, lerp, invert, conjugate, length, len, squaredLength, sqrLen, normalize, str, exactEquals, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationValues", function() { return fromRotationTranslationValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function() { return fromRotationTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReal", function() { return getReal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDual", function() { return getDual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReal", function() { return setReal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDual", function() { return setDual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateByQuatAppend", function() { return rotateByQuatAppend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateByQuatPrepend", function() { return rotateByQuatPrepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateAroundAxis", function() { return rotateAroundAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function() { return conjugate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quat.js */ "./node_modules/gl-matrix/src/gl-matrix/quat.js");
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat4.js */ "./node_modules/gl-matrix/src/gl-matrix/mat4.js");




/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */


/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */
function create() {
  let dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = 0;
  dq[1] = 0;
  dq[2] = 0;
  dq[3] = 1;
  dq[4] = 0;
  dq[5] = 0;
  dq[6] = 0;
  dq[7] = 0;
  return dq;
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */
function clone(a) {
  let dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = a[0];
  dq[1] = a[1];
  dq[2] = a[2];
  dq[3] = a[3];
  dq[4] = a[4];
  dq[5] = a[5];
  dq[6] = a[6];
  dq[7] = a[7];
  return dq;
}

/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */
function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
  let dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  dq[4] = x2;
  dq[5] = y2;
  dq[6] = z2;
  dq[7] = w2;
  return dq;
}

/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */
function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
  let dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  let ax = x2 * 0.5,
    ay = y2 * 0.5,
    az = z2 * 0.5;
  dq[4] = ax * w1 + ay * z1 - az * y1;
  dq[5] = ay * w1 + az * x1 - ax * z1;
  dq[6] = az * w1 + ax * y1 - ay * x1;
  dq[7] = -ax * x1 - ay * y1 - az * z1;
  return dq;
}

/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q quaternion
 * @param {vec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromRotationTranslation(out, q, t) {
  let ax = t[0] * 0.5,
    ay = t[1] * 0.5,
    az = t[2] * 0.5,
    bx = q[0],
    by = q[1],
    bz = q[2],
    bw = q[3];
  out[0] = bx;
  out[1] = by;
  out[2] = bz;
  out[3] = bw;
  out[4] = ax * bw + ay * bz - az * by;
  out[5] = ay * bw + az * bx - ax * bz;
  out[6] = az * bw + ax * by - ay * bx;
  out[7] = -ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Creates a dual quat from a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {vec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromTranslation(out, t) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = t[0] * 0.5;
  out[5] = t[1] * 0.5;
  out[6] = t[2] * 0.5;
  out[7] = 0;
  return out;
}

/**
 * Creates a dual quat from a quaternion
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromRotation(out, q) {
  out[0] = q[0];
  out[1] = q[1];
  out[2] = q[2];
  out[3] = q[3];
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}

/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {mat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */
function fromMat4(out, a) {
  //TODO Optimize this
  let outer = _quat_js__WEBPACK_IMPORTED_MODULE_1__["create"]();
  _mat4_js__WEBPACK_IMPORTED_MODULE_2__["getRotation"](outer, a);
  let t = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  _mat4_js__WEBPACK_IMPORTED_MODULE_2__["getTranslation"](t, a);
  fromRotationTranslation(out, outer, t);
  return out;
}

/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  return out;
}

/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}

/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */
function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
  out[0] = x1;
  out[1] = y1;
  out[2] = z1;
  out[3] = w1;

  out[4] = x2;
  out[5] = y2;
  out[6] = z2;
  out[7] = w2;
  return out;
}

/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} real part
 */
const getReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__["copy"];

/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} dual part
 */
function getDual(out, a) {
  out[0] = a[4];
  out[1] = a[5];
  out[2] = a[6];
  out[3] = a[7];
  return out;
}

/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */
const setReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__["copy"];

/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */
function setDual(out, q) {
  out[4] = q[0];
  out[5] = q[1];
  out[6] = q[2];
  out[7] = q[3];
  return out;
}

/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {quat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */
function getTranslation(out, a) {
  let ax = a[4],
    ay = a[5],
    az = a[6],
    aw = a[7],
    bx = -a[0],
    by = -a[1],
    bz = -a[2],
    bw = a[3];
  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  return out;
}

/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to translate
 * @param {vec3} v vector to translate by
 * @returns {quat2} out
 */
function translate(out, a, v) {
  let ax1 = a[0],
    ay1 = a[1],
    az1 = a[2],
    aw1 = a[3],
    bx1 = v[0] * 0.5,
    by1 = v[1] * 0.5,
    bz1 = v[2] * 0.5,
    ax2 = a[4],
    ay2 = a[5],
    az2 = a[6],
    aw2 = a[7];
  out[0] = ax1;
  out[1] = ay1;
  out[2] = az1;
  out[3] = aw1;
  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
  return out;
}

/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateX(out, a, rad) {
  let bx = -a[0],
    by = -a[1],
    bz = -a[2],
    bw = a[3],
    ax = a[4],
    ay = a[5],
    az = a[6],
    aw = a[7],
    ax1 = ax * bw + aw * bx + ay * bz - az * by,
    ay1 = ay * bw + aw * by + az * bx - ax * bz,
    az1 = az * bw + aw * bz + ax * by - ay * bx,
    aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateX"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}

/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateY(out, a, rad) {
  let bx = -a[0],
    by = -a[1],
    bz = -a[2],
    bw = a[3],
    ax = a[4],
    ay = a[5],
    az = a[6],
    aw = a[7],
    ax1 = ax * bw + aw * bx + ay * bz - az * by,
    ay1 = ay * bw + aw * by + az * bx - ax * bz,
    az1 = az * bw + aw * bz + ax * by - ay * bx,
    aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateY"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}

/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateZ(out, a, rad) {
  let bx = -a[0],
    by = -a[1],
    bz = -a[2],
    bw = a[3],
    ax = a[4],
    ay = a[5],
    az = a[6],
    aw = a[7],
    ax1 = ax * bw + aw * bx + ay * bz - az * by,
    ay1 = ay * bw + aw * by + az * bx - ax * bz,
    az1 = az * bw + aw * bz + ax * by - ay * bx,
    aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateZ"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}

/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {quat} q quaternion to rotate by
 * @returns {quat2} out
 */
function rotateByQuatAppend(out, a, q) {
  let qx = q[0],
    qy = q[1],
    qz = q[2],
    qw = q[3],
    ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];

  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
  ax = a[4];
  ay = a[5];
  az = a[6];
  aw = a[7];
  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
  return out;
}

/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat} q quaternion to rotate by
 * @param {quat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */
function rotateByQuatPrepend(out, q, a) {
  let qx = q[0],
    qy = q[1],
    qz = q[2],
    qw = q[3],
    bx = a[0],
    by = a[1],
    bz = a[2],
    bw = a[3];

  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
  bx = a[4];
  by = a[5];
  bz = a[6];
  bw = a[7];
  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
  return out;
}

/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {vec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */
function rotateAroundAxis(out, a, axis, rad) {
  //Special case for rad = 0
  if (Math.abs(rad) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return copy(out, a);
  }
  let axisLength = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);

  rad = rad * 0.5;
  let s = Math.sin(rad);
  let bx = s * axis[0] / axisLength;
  let by = s * axis[1] / axisLength;
  let bz = s * axis[2] / axisLength;
  let bw = Math.cos(rad);

  let ax1 = a[0],
    ay1 = a[1],
    az1 = a[2],
    aw1 = a[3];
  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;

  let ax = a[4],
    ay = a[5],
    az = a[6],
    aw = a[7];
  out[4] = ax * bw + aw * bx + ay * bz - az * by;
  out[5] = ay * bw + aw * by + az * bx - ax * bz;
  out[6] = az * bw + aw * bz + ax * by - ay * bx;
  out[7] = aw * bw - ax * bx - ay * by - az * bz;

  return out;
}

/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 * @function
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  return out;
}

/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 */
function multiply(out, a, b) {
  let ax0 = a[0],
    ay0 = a[1],
    az0 = a[2],
    aw0 = a[3],
    bx1 = b[4],
    by1 = b[5],
    bz1 = b[6],
    bw1 = b[7],
    ax1 = a[4],
    ay1 = a[5],
    az1 = a[6],
    aw1 = a[7],
    bx0 = b[0],
    by0 = b[1],
    bz0 = b[2],
    bw0 = b[3];
  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
  return out;
}

/**
 * Alias for {@link quat2.multiply}
 * @function
 */
const mul = multiply;

/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  return out;
}

/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
const dot = _quat_js__WEBPACK_IMPORTED_MODULE_1__["dot"];

/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */
function lerp(out, a, b, t) {
  let mt = 1 - t;
  if (dot(a, b) < 0) t = -t;

  out[0] = a[0] * mt + b[0] * t;
  out[1] = a[1] * mt + b[1] * t;
  out[2] = a[2] * mt + b[2] * t;
  out[3] = a[3] * mt + b[3] * t;
  out[4] = a[4] * mt + b[4] * t;
  out[5] = a[5] * mt + b[5] * t;
  out[6] = a[6] * mt + b[6] * t;
  out[7] = a[7] * mt + b[7] * t;

  return out;
}

/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */
function invert(out, a) {
  let sqlen = squaredLength(a);
  out[0] = -a[0] / sqlen;
  out[1] = -a[1] / sqlen;
  out[2] = -a[2] / sqlen;
  out[3] = a[3] / sqlen;
  out[4] = -a[4] / sqlen;
  out[5] = -a[5] / sqlen;
  out[6] = -a[6] / sqlen;
  out[7] = a[7] / sqlen;
  return out;
}

/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  out[4] = -a[4];
  out[5] = -a[5];
  out[6] = -a[6];
  out[7] = a[7];
  return out;
}

/**
 * Calculates the length of a dual quat
 *
 * @param {quat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */
const length = _quat_js__WEBPACK_IMPORTED_MODULE_1__["length"];

/**
 * Alias for {@link quat2.length}
 * @function
 */
const len = length;

/**
 * Calculates the squared length of a dual quat
 *
 * @param {quat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
const squaredLength = _quat_js__WEBPACK_IMPORTED_MODULE_1__["squaredLength"];

/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */
const sqrLen = squaredLength;

/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */
function normalize(out, a) {
  let magnitude = squaredLength(a);
  if (magnitude > 0) {
    magnitude = Math.sqrt(magnitude);
    out[0] = a[0] / magnitude;
    out[1] = a[1] / magnitude;
    out[2] = a[2] / magnitude;
    out[3] = a[3] / magnitude;
    out[4] = a[4] / magnitude;
    out[5] = a[5] / magnitude;
    out[6] = a[6] / magnitude;
    out[7] = a[7] / magnitude;
  }
  return out;
}

/**
 * Returns a string representation of a dual quatenion
 *
 * @param {quat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */
function str(a) {
  return 'quat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
    a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ')';
}

/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat2} a the first dual quaternion.
 * @param {quat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] &&
    a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}

/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {quat2} a the first dual quat.
 * @param {quat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3],
    a4 = a[4],
    a5 = a[5],
    a6 = a[6],
    a7 = a[7];
  let b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3],
    b4 = b[4],
    b5 = b[5],
    b6 = b[6],
    b7 = b[7];
  return (Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
    Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
    Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
    Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
    Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
    Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
    Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
    Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)));
}


/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/vec2.js":
/*!******************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/vec2.js ***!
  \******************************************************/
/*! exports provided: create, clone, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, length, squaredLength, negate, inverse, normalize, dot, cross, lerp, random, transformMat2, transformMat2d, transformMat3, transformMat4, rotate, angle, str, exactEquals, equals, len, sub, mul, div, dist, sqrDist, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2", function() { return transformMat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2d", function() { return transformMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");


/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
  out[0] = 0;
  out[1] = 0;
  return out;
}

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}

/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}

/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}

/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */
function round (out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  return out;
}

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return Math.sqrt(x*x + y*y);
}

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return x*x + y*y;
}

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0],
    y = a[1];
  return Math.sqrt(x*x + y*y);
}

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength (a) {
  var x = a[0],
    y = a[1];
  return x*x + y*y;
}

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
  var x = a[0],
    y = a[1];
  var len = x*x + y*y;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
  var ax = a[0],
    ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
  let x = a[0];
  let y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}

/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {vec2} a The vec2 point to rotate
 * @param {vec2} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec2} out
 */
function rotate(out, a, b, c) {
  //Translate point to the origin
  let p0 = a[0] - b[0],
  p1 = a[1] - b[1],
  sinC = Math.sin(c),
  cosC = Math.cos(c);
  
  //perform rotation and translate to correct position
  out[0] = p0*cosC - p1*sinC + b[0];
  out[1] = p0*sinC + p1*cosC + b[1];

  return out;
}

/**
 * Get the angle between two 2D vectors
 * @param {vec2} a The first operand
 * @param {vec2} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  let x1 = a[0],
    y1 = a[1],
    x2 = b[0],
    y2 = b[1];
  
  let len1 = x1*x1 + y1*y1;
  if (len1 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len1 = 1 / Math.sqrt(len1);
  }
  
  let len2 = x2*x2 + y2*y2;
  if (len2 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len2 = 1 / Math.sqrt(len2);
  }
  
  let cosine = (x1 * x2 + y1 * y2) * len1 * len2;
  
  
  if(cosine > 1.0) {
    return 0;
  }
  else if(cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1];
  let b0 = b[0], b1 = b[1];
  return (Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)));
}

/**
 * Alias for {@link vec2.length}
 * @function
 */
const len = length;

/**
 * Alias for {@link vec2.subtract}
 * @function
 */
const sub = subtract;

/**
 * Alias for {@link vec2.multiply}
 * @function
 */
const mul = multiply;

/**
 * Alias for {@link vec2.divide}
 * @function
 */
const div = divide;

/**
 * Alias for {@link vec2.distance}
 * @function
 */
const dist = distance;

/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;

/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
const sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 2;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1];
    }

    return a;
  };
})();


/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/vec3.js":
/*!******************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/vec3.js ***!
  \******************************************************/
/*! exports provided: create, clone, length, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, squaredLength, negate, inverse, normalize, dot, cross, lerp, hermite, bezier, random, transformMat4, transformMat3, transformQuat, rotateX, rotateY, rotateZ, angle, str, exactEquals, equals, sub, mul, div, dist, sqrDist, len, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hermite", function() { return hermite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bezier", function() { return bezier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");


/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  return out;
}

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return Math.sqrt(x*x + y*y + z*z);
}

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return Math.sqrt(x*x + y*y + z*z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return x*x + y*y + z*z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return x*x + y*y + z*z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let len = x*x + y*y + z*z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2];
  let bx = b[0], by = b[1], bz = b[2];

  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function hermite(out, a, b, c, d, t) {
  let factorTimes2 = t * t;
  let factor1 = factorTimes2 * (2 * t - 3) + 1;
  let factor2 = factorTimes2 * (t - 2) + t;
  let factor3 = factorTimes2 * (t - 1);
  let factor4 = factorTimes2 * (3 - 2 * t);

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function bezier(out, a, b, c, d, t) {
  let inverseFactor = 1 - t;
  let inverseFactorTimesTwo = inverseFactor * inverseFactor;
  let factorTimes2 = t * t;
  let factor1 = inverseFactorTimesTwo * inverseFactor;
  let factor2 = 3 * t * inverseFactorTimesTwo;
  let factor3 = 3 * factorTimes2 * inverseFactor;
  let factor4 = factorTimes2 * t;

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
  scale = scale || 1.0;

  let r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
  let z = (_common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0) - 1.0;
  let zScale = Math.sqrt(1.0-z*z) * scale;

  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  let w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}

/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
    // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
    let qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    let x = a[0], y = a[1], z = a[2];
    // var qvec = [qx, qy, qz];
    // var uv = vec3.cross([], qvec, a);
    let uvx = qy * z - qz * y,
        uvy = qz * x - qx * z,
        uvz = qx * y - qy * x;
    // var uuv = vec3.cross([], qvec, uv);
    let uuvx = qy * uvz - qz * uvy,
        uuvy = qz * uvx - qx * uvz,
        uuvz = qx * uvy - qy * uvx;
    // vec3.scale(uv, uv, 2 * w);
    let w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2;
    // vec3.scale(uuv, uuv, 2);
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;
    // return vec3.add(out, a, vec3.add(out, uv, uuv));
    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
}

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0];
  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
  r[1] = p[1];
  r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
  r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
  r[2] = p[2];

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  let tempA = fromValues(a[0], a[1], a[2]);
  let tempB = fromValues(b[0], b[1], b[2]);

  normalize(tempA, tempA);
  normalize(tempB, tempB);

  let cosine = dot(tempA, tempB);

  if(cosine > 1.0) {
    return 0;
  }
  else if(cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2];
  let b0 = b[0], b1 = b[1], b2 = b[2];
  return (Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)));
}

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
const sub = subtract;

/**
 * Alias for {@link vec3.multiply}
 * @function
 */
const mul = multiply;

/**
 * Alias for {@link vec3.divide}
 * @function
 */
const div = divide;

/**
 * Alias for {@link vec3.distance}
 * @function
 */
const dist = distance;

/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;

/**
 * Alias for {@link vec3.length}
 * @function
 */
const len = length;

/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
const sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 3;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
    }

    return a;
  };
})();


/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/vec4.js":
/*!******************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/vec4.js ***!
  \******************************************************/
/*! exports provided: create, clone, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, length, squaredLength, negate, inverse, normalize, dot, lerp, random, transformMat4, transformQuat, str, exactEquals, equals, sub, mul, div, dist, sqrDist, len, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");


/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create() {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  return out;
}

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
function clone(a) {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
function fromValues(x, y, z, w) {
  let out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}

/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}

/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}

/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  return out;
}

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  let w = b[3] - a[3];
  return Math.sqrt(x*x + y*y + z*z + w*w);
}

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  let w = b[3] - a[3];
  return x*x + y*y + z*z + w*w;
}

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return Math.sqrt(x*x + y*y + z*z + w*w);
}

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return x*x + y*y + z*z + w*w;
}

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  let len = x*x + y*y + z*z + w*w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  let aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
function random(out, vectorScale) {
  vectorScale = vectorScale || 1.0;

  // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;
  var v1, v2, v3, v4;
  var s1, s2;
  do {
    v1 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    v2 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);
  do {
    v3 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    v4 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4(out, a, m) {
  let x = a[0], y = a[1], z = a[2], w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
function transformQuat(out, a, q) {
  let x = a[0], y = a[1], z = a[2];
  let qx = q[0], qy = q[1], qz = q[2], qw = q[3];

  // calculate quat * vec
  let ix = qw * x + qy * z - qz * y;
  let iy = qw * y + qz * x - qx * z;
  let iz = qw * z + qx * y - qy * x;
  let iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return (Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
}

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
const sub = subtract;

/**
 * Alias for {@link vec4.multiply}
 * @function
 */
const mul = multiply;

/**
 * Alias for {@link vec4.divide}
 * @function
 */
const div = divide;

/**
 * Alias for {@link vec4.distance}
 * @function
 */
const dist = distance;

/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;

/**
 * Alias for {@link vec4.length}
 * @function
 */
const len = length;

/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
const sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 4;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
    }

    return a;
  };
})();


/***/ }),

/***/ "./src/App/Additonal/AdditionalTool.ts":
/*!*********************************************!*\
  !*** ./src/App/Additonal/AdditionalTool.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VoronoiAnimationDrawer_1 = __webpack_require__(/*! ./VoronoiAnimationDrawer */ "./src/App/Additonal/VoronoiAnimationDrawer.ts");
var StainedGlassDrawer_1 = __webpack_require__(/*! ./StainedGlassDrawer */ "./src/App/Additonal/StainedGlassDrawer.ts");
// 追加機能のタイプ
var AdditionalType;
(function (AdditionalType) {
    AdditionalType[AdditionalType["AdditionalTypeNone"] = 0] = "AdditionalTypeNone";
    AdditionalType[AdditionalType["AdditionalTypeVoronoiAnimation"] = 1] = "AdditionalTypeVoronoiAnimation";
    AdditionalType[AdditionalType["AdditionalTypeDistanceMapAnimation"] = 2] = "AdditionalTypeDistanceMapAnimation";
    AdditionalType[AdditionalType["AdditionalTypeStainedGlass"] = 3] = "AdditionalTypeStainedGlass";
    AdditionalType[AdditionalType["AdditionalTypeSoftShadow"] = 4] = "AdditionalTypeSoftShadow";
})(AdditionalType = exports.AdditionalType || (exports.AdditionalType = {}));
// 追加機能を実行するクラス
var AdditionalTool = /** @class */ (function () {
    // コンストラクタ
    function AdditionalTool(cnvs, manager) {
        this.canvas = cnvs;
        this.layerManager = manager;
        this.currentAdditionalType = AdditionalType.AdditionalTypeNone;
        this.voronoiDrawer = new VoronoiAnimationDrawer_1.VoronoiAnimationDrawer();
        this.voronoiDrawer.prepareShaderProgram(this.canvas.getGL());
        this.stainedGlassDrawer = new StainedGlassDrawer_1.StainedGlassDrawer();
        this.stainedGlassDrawer.prepareShaderProgram(this.canvas.getGL());
    }
    // 追加機能タイプを取得する
    AdditionalTool.prototype.getAdditionalType = function () {
        return this.currentAdditionalType;
    };
    // 追加機能タイプを設定する
    AdditionalTool.prototype.setAdditionalType = function (type) {
        this.currentAdditionalType = type;
    };
    // アニメーションを停止する
    AdditionalTool.prototype.stopAnimation = function () {
        this.voronoiDrawer.stopAnimation();
    };
    // 描画する
    AdditionalTool.prototype.draw = function (seedCount) {
        var gl = this.canvas.getGL();
        var texture = this.layerManager.getCanvasLayer().getTexture();
        var matrix = this.canvas.getMatrix();
        var buffer = this.canvas.getFrameBuffer();
        switch (this.currentAdditionalType) {
            case AdditionalType.AdditionalTypeVoronoiAnimation:
                this.voronoiDrawer.setSeedCount(seedCount);
                this.voronoiDrawer.draw(gl, buffer, matrix, this.currentAdditionalType);
                break;
            case AdditionalType.AdditionalTypeDistanceMapAnimation:
                this.voronoiDrawer.setSeedCount(seedCount);
                this.voronoiDrawer.draw(gl, buffer, matrix, this.currentAdditionalType);
                break;
            case AdditionalType.AdditionalTypeStainedGlass:
                this.stainedGlassDrawer.draw(gl, buffer, texture, matrix, seedCount / 300.);
                break;
            case AdditionalType.AdditionalTypeSoftShadow:
                break;
        }
    };
    return AdditionalTool;
}());
exports.AdditionalTool = AdditionalTool;


/***/ }),

/***/ "./src/App/Additonal/StainedGlassDrawer.ts":
/*!*************************************************!*\
  !*** ./src/App/Additonal/StainedGlassDrawer.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RandomSpouitShader_1 = __webpack_require__(/*! ../../Base/Shader/RandomSpouitShader */ "./src/Base/Shader/RandomSpouitShader.ts");
var Texture_1 = __webpack_require__(/*! ../../Base/Texture/Texture */ "./src/Base/Texture/Texture.ts");
var VoronoiAnimationDrawer_1 = __webpack_require__(/*! ./VoronoiAnimationDrawer */ "./src/App/Additonal/VoronoiAnimationDrawer.ts");
// ステンドグラス風の描画を行うクラス
var StainedGlassDrawer = /** @class */ (function () {
    // コンストラクタ
    function StainedGlassDrawer() {
        this.randomShader = new RandomSpouitShader_1.RandomSpouitShader();
        this.voronoiDrawer = new VoronoiAnimationDrawer_1.VoronoiAnimationDrawer();
    }
    // シェーダープログラムを準備する
    StainedGlassDrawer.prototype.prepareShaderProgram = function (gl) {
        this.voronoiDrawer.prepareShaderProgram(gl);
    };
    // 描画する
    StainedGlassDrawer.prototype.draw = function (gl, frameBuffer, texture, matrix, seedCount) {
        var seed = new Texture_1.Texture();
        seed.makeTexture(gl);
        this.randomShader.draw(gl, frameBuffer, texture, seed.getTexture(), matrix, seedCount);
        this.voronoiDrawer.drawVoronoi(gl, frameBuffer, matrix, seed.getTexture());
    };
    return StainedGlassDrawer;
}());
exports.StainedGlassDrawer = StainedGlassDrawer;


/***/ }),

/***/ "./src/App/Additonal/VoronoiAnimationDrawer.ts":
/*!*****************************************************!*\
  !*** ./src/App/Additonal/VoronoiAnimationDrawer.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VoronoiShader_1 = __webpack_require__(/*! ../../Base/Shader/VoronoiShader */ "./src/Base/Shader/VoronoiShader.ts");
var Texture_1 = __webpack_require__(/*! ../../Base/Texture/Texture */ "./src/Base/Texture/Texture.ts");
var PointColorShader_1 = __webpack_require__(/*! ../../Base/Shader/PointColorShader */ "./src/Base/Shader/PointColorShader.ts");
var AdditionalTool_1 = __webpack_require__(/*! ./AdditionalTool */ "./src/App/Additonal/AdditionalTool.ts");
var ANIMATION_SPEED = -0.01; // 頂点の移動速度
// ボロノイアニメーションを描画するクラス
var VoronoiAnimationDrawer = /** @class */ (function () {
    // コンストラクタ
    function VoronoiAnimationDrawer() {
        this.vertex = new Array();
        this.color = new Array();
        this.voronoiShader = new VoronoiShader_1.VoronoiShader();
        this.pointShader = new PointColorShader_1.PointColorShader();
        this.seedTexture = new Texture_1.Texture();
        this.seedCount = 0;
        this.animationId = -1;
    }
    // 乱数を作成する
    VoronoiAnimationDrawer.prototype.getRandom = function () {
        return Math.random() * 2 - 1.0;
    };
    // 母点数を指定する
    VoronoiAnimationDrawer.prototype.setSeedCount = function (num) {
        this.seedCount = num;
        this.setSeedVerex();
    };
    // 母点頂点を設定する
    VoronoiAnimationDrawer.prototype.setSeedVerex = function () {
        this.vertex.length = 0;
        this.color.length = 0;
        for (var i = 0; i < this.seedCount; i++) {
            this.vertex.push(this.getRandom(), this.getRandom());
            if (i % 2 === 0) {
                this.color.push(0.1 + i / this.seedCount, 0.4, 0.9, 1.0);
            }
            else {
                this.color.push(0.1 + i / this.seedCount, 0.9, 0.8, 1.0);
            }
        }
    };
    // 頂点を移動する
    VoronoiAnimationDrawer.prototype.translateVertex = function () {
        for (var i = 0; i < this.vertex.length - 2; i += 2) {
            var x = this.vertex[i];
            var y = this.vertex[i + 1];
            this.vertex[i] = x + ANIMATION_SPEED; // x座標
            this.vertex[i + 1] = y + ANIMATION_SPEED; // y座標
            if (this.vertex[i] < -1.) {
                this.vertex[i] = y;
                this.vertex[i + 1] = 0;
            }
            else if (this.vertex[i + 1] < -1.) {
                this.vertex[i] = 1;
                this.vertex[i + 1] = -x;
            }
        }
    };
    // テクスチャを入れ替える
    VoronoiAnimationDrawer.prototype.swapTextures = function () {
        var tmp = this.read;
        this.read = this.write;
        this.write = tmp;
    };
    // シェーダープログラムを準備する
    VoronoiAnimationDrawer.prototype.prepareShaderProgram = function (gl) {
        this.voronoiShader.prepareProgram(gl);
    };
    // 描画する
    VoronoiAnimationDrawer.prototype.draw = function (gl, frameBuffer, matrix, type) {
        var _this = this;
        this.stopAnimation();
        this.translateVertex();
        this.seedTexture.makeTexture(gl);
        this.pointShader.draw(gl, frameBuffer, gl.POINTS, this.seedTexture.getTexture(), this.vertex, this.color, this.seedCount, matrix);
        var readTex = new Texture_1.Texture();
        readTex.makeTexture(gl);
        this.read = readTex.getTexture();
        this.voronoiShader.makeReadTexture(gl, frameBuffer, this.seedTexture.getTexture(), this.read, matrix);
        var writeTex = new Texture_1.Texture();
        writeTex.makeTexture(gl);
        this.write = writeTex.getTexture();
        var step = gl.canvas.width / 2.0;
        while (step >= 1) {
            this.voronoiShader.runJumpFlood(gl, frameBuffer, this.read, this.write, matrix, step);
            this.swapTextures();
            step /= 2.0;
        }
        if (type === AdditionalTool_1.AdditionalType.AdditionalTypeDistanceMapAnimation) {
            this.voronoiShader.drawDistanceMap(gl, this.seedTexture.getTexture(), this.read, matrix);
        }
        else {
            this.voronoiShader.drawVoronoi(gl, this.seedTexture.getTexture(), this.read, matrix);
        }
        this.animationId = requestAnimationFrame(function () { return _this.draw(gl, frameBuffer, matrix, type); });
    };
    // ボロノイ図を描く
    VoronoiAnimationDrawer.prototype.drawVoronoi = function (gl, frameBuffer, matrix, texture) {
        var readTex = new Texture_1.Texture();
        readTex.makeTexture(gl);
        this.read = readTex.getTexture();
        this.voronoiShader.makeReadTexture(gl, frameBuffer, texture, this.read, matrix);
        var writeTex = new Texture_1.Texture();
        writeTex.makeTexture(gl);
        this.write = writeTex.getTexture();
        var step = gl.canvas.width / 2.0;
        while (step >= 1) {
            this.voronoiShader.runJumpFlood(gl, frameBuffer, this.read, this.write, matrix, step);
            this.swapTextures();
            step /= 2.0;
        }
        this.voronoiShader.drawVoronoi(gl, texture, this.read, matrix);
    };
    // アニメーションを停止する
    VoronoiAnimationDrawer.prototype.stopAnimation = function () {
        if (this.animationId != -1) {
            cancelAnimationFrame(this.animationId);
        }
    };
    return VoronoiAnimationDrawer;
}());
exports.VoronoiAnimationDrawer = VoronoiAnimationDrawer;


/***/ }),

/***/ "./src/App/Effect/EffectTool.ts":
/*!**************************************!*\
  !*** ./src/App/Effect/EffectTool.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SepiaShader_1 = __webpack_require__(/*! ../../Base/Shader/SepiaShader */ "./src/Base/Shader/SepiaShader.ts");
var GrayscaleShader_1 = __webpack_require__(/*! ../../Base/Shader/GrayscaleShader */ "./src/Base/Shader/GrayscaleShader.ts");
var InvertShader_1 = __webpack_require__(/*! ../../Base/Shader/InvertShader */ "./src/Base/Shader/InvertShader.ts");
var PosterizationShader_1 = __webpack_require__(/*! ../../Base/Shader/PosterizationShader */ "./src/Base/Shader/PosterizationShader.ts");
var FrostedGlassShader_1 = __webpack_require__(/*! ../../Base/Shader/FrostedGlassShader */ "./src/Base/Shader/FrostedGlassShader.ts");
var ThresholdShader_1 = __webpack_require__(/*! ../../Base/Shader/ThresholdShader */ "./src/Base/Shader/ThresholdShader.ts");
var TranspalentColorShader_1 = __webpack_require__(/*! ../../Base/Shader/TranspalentColorShader */ "./src/Base/Shader/TranspalentColorShader.ts");
var ZoomBlurShader_1 = __webpack_require__(/*! ../../Base/Shader/ZoomBlurShader */ "./src/Base/Shader/ZoomBlurShader.ts");
var BrightnessContrastShader_1 = __webpack_require__(/*! ../../Base/Shader/BrightnessContrastShader */ "./src/Base/Shader/BrightnessContrastShader.ts");
var HueSaturationShader_1 = __webpack_require__(/*! ../../Base/Shader/HueSaturationShader */ "./src/Base/Shader/HueSaturationShader.ts");
var PixelateShader_1 = __webpack_require__(/*! ../../Base/Shader/PixelateShader */ "./src/Base/Shader/PixelateShader.ts");
var ExpansionShader_1 = __webpack_require__(/*! ../../Base/Shader/ExpansionShader */ "./src/Base/Shader/ExpansionShader.ts");
// エフェクトのタイプ
var EffectType;
(function (EffectType) {
    EffectType[EffectType["EffectTypeNone"] = 0] = "EffectTypeNone";
    EffectType[EffectType["EffectTypeSepia"] = 1] = "EffectTypeSepia";
    EffectType[EffectType["EffectTypeGrayscale"] = 2] = "EffectTypeGrayscale";
    EffectType[EffectType["EffectTypeInvert"] = 3] = "EffectTypeInvert";
    EffectType[EffectType["EffectTypePosterization"] = 4] = "EffectTypePosterization";
    EffectType[EffectType["EffectTypefrostedGlass"] = 5] = "EffectTypefrostedGlass";
    EffectType[EffectType["EffectTypeThreshold"] = 6] = "EffectTypeThreshold";
    EffectType[EffectType["EffectTypeTranspalent"] = 7] = "EffectTypeTranspalent";
    EffectType[EffectType["EffectTypeZoomBlur"] = 8] = "EffectTypeZoomBlur";
    EffectType[EffectType["EffectTypeBrightnessContrast"] = 9] = "EffectTypeBrightnessContrast";
    EffectType[EffectType["EffectTypeHueSarturation"] = 10] = "EffectTypeHueSarturation";
    EffectType[EffectType["EffectTypePixelate"] = 11] = "EffectTypePixelate";
    EffectType[EffectType["EffectTypeExpansion"] = 12] = "EffectTypeExpansion";
})(EffectType = exports.EffectType || (exports.EffectType = {}));
// エフェクトを行うクラス
var EffectTool = /** @class */ (function () {
    // コンストラクタ
    function EffectTool(cnvs, manager) {
        this.canvas = cnvs;
        this.layerManager = manager;
        this.currentEffectType = EffectType.EffectTypeNone;
    }
    // エフェクトタイプを取得する
    EffectTool.prototype.getEffectType = function () {
        return this.currentEffectType;
    };
    // エフェクトタイプを設定する
    EffectTool.prototype.setEffectType = function (type) {
        this.currentEffectType = type;
    };
    // 描画する
    EffectTool.prototype.draw = function (value1, value2, value3, value4) {
        if (value2 === void 0) { value2 = 0; }
        if (value3 === void 0) { value3 = 0; }
        if (value4 === void 0) { value4 = 0; }
        switch (this.currentEffectType) {
            case EffectType.EffectTypeSepia:
                var sepiaShader = new SepiaShader_1.SepiaShader();
                sepiaShader.draw(this.canvas.getGL(), this.layerManager.getCanvasLayer().getTexture(), this.canvas.getMatrix());
                break;
            case EffectType.EffectTypeGrayscale:
                var gsShader = new GrayscaleShader_1.GrayscaleShader();
                gsShader.draw(this.canvas.getGL(), this.layerManager.getCanvasLayer().getTexture(), this.canvas.getMatrix());
                break;
            case EffectType.EffectTypeInvert:
                var invertShader = new InvertShader_1.InvertShader();
                invertShader.draw(this.canvas.getGL(), this.layerManager.getCanvasLayer().getTexture(), this.canvas.getMatrix());
                break;
            case EffectType.EffectTypePosterization:
                var posShader = new PosterizationShader_1.PosterizationShader();
                posShader.draw(this.canvas.getGL(), this.layerManager.getCanvasLayer().getTexture(), this.canvas.getMatrix(), value1);
                break;
            case EffectType.EffectTypefrostedGlass:
                var fgShader = new FrostedGlassShader_1.ForestedGlassShader();
                fgShader.draw(this.canvas.getGL(), this.layerManager.getCanvasLayer().getTexture(), this.canvas.getMatrix(), value1);
                break;
            case EffectType.EffectTypeThreshold:
                var thShader = new ThresholdShader_1.ThresholdShader();
                thShader.draw(this.canvas.getGL(), this.layerManager.getCanvasLayer().getTexture(), this.canvas.getMatrix(), value1);
                break;
            case EffectType.EffectTypeTranspalent:
                var tpShader = new TranspalentColorShader_1.TranspalentColorShader();
                tpShader.draw(this.canvas.getGL(), this.layerManager.getCanvasLayer().getTexture(), this.canvas.getMatrix(), value1);
                break;
            case EffectType.EffectTypeZoomBlur:
                var zbShader = new ZoomBlurShader_1.ZoomBlurShader();
                zbShader.draw(this.canvas.getGL(), this.layerManager.getCanvasLayer().getTexture(), this.canvas.getMatrix(), value3, value4, value1);
                break;
            case EffectType.EffectTypeBrightnessContrast:
                var bcShader = new BrightnessContrastShader_1.BrightnessContrastShader();
                bcShader.draw(this.canvas.getGL(), this.layerManager.getCanvasLayer().getTexture(), this.canvas.getMatrix(), value1, value2);
                break;
            case EffectType.EffectTypeHueSarturation:
                var hsShader = new HueSaturationShader_1.HueSaturationShader();
                hsShader.draw(this.canvas.getGL(), this.layerManager.getCanvasLayer().getTexture(), this.canvas.getMatrix(), value1, value2);
                break;
            case EffectType.EffectTypePixelate:
                var pxShader = new PixelateShader_1.PixelateShader();
                pxShader.draw(this.canvas.getGL(), this.layerManager.getCanvasLayer().getTexture(), this.canvas.getMatrix(), value2, value3, value1);
                break;
            case EffectType.EffectTypeExpansion:
                var exShader = new ExpansionShader_1.ExpansionShader();
                exShader.draw(this.canvas.getGL(), this.layerManager.getCanvasLayer().getTexture(), this.canvas.getMatrix(), value3, value4, value1, value2);
                break;
        }
    };
    return EffectTool;
}());
exports.EffectTool = EffectTool;


/***/ }),

/***/ "./src/App/Effect/GradationDrawer.ts":
/*!*******************************************!*\
  !*** ./src/App/Effect/GradationDrawer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GradationTexture_1 = __webpack_require__(/*! ../../Base/Texture/GradationTexture */ "./src/Base/Texture/GradationTexture.ts");
var GradationTool_1 = __webpack_require__(/*! ./GradationTool */ "./src/App/Effect/GradationTool.ts");
var GradationShader_1 = __webpack_require__(/*! ../../Base/Shader/GradationShader */ "./src/Base/Shader/GradationShader.ts");
// 青-赤
var blueRedPos = [
    -1.,
    1. // 終点
];
var blueRedCol = [
    0, 0, 1, 1,
    1, 0, 0, 1 // 終点カラー
];
// トイカメラ
var toyCameraPos = [
    -1.,
    -1. + 2. / 4.,
    -1. + 4. / 4.,
    -1. + 6. / 4.,
    1.,
];
var toyCameraCol = [
    23. / 255., 32. / 255., 50. / 255., 1.,
    30. / 255., 50. / 255., 60. / 255., 1.,
    22. / 255., 120. / 255., 87. / 255., 1.,
    100. / 255., 209. / 255., 137. / 255., 1.,
    240. / 255., 255. / 255., 245. / 255., 1.,
];
// レトロ風
var retroPos = [
    -1.,
    -1. + 2. / 4.,
    -1. + 4. / 4.,
    -1. + 6. / 4.,
    1.,
];
var retroCol = [
    70. / 255., 70. / 255., 140. / 255., 1.,
    110. / 255., 135. / 255., 170. / 255., 1.,
    190. / 255., 180. / 255., 165. / 255., 1.,
    240. / 255., 209. / 255., 170. / 255., 1.,
    250. / 255., 230. / 255., 210. / 255., 1.,
];
// グラデーション描画を作成するクラス
var GradationDrawer = /** @class */ (function () {
    // コンストラクタ
    function GradationDrawer() {
        this.vertex = new Array();
        this.color = new Array();
        this.gradation = new GradationTexture_1.GradationTexture();
        this.shader = new GradationShader_1.GradationShader();
    }
    // テクスチャ頂点と頂点色を設定する
    GradationDrawer.prototype.setVertexAndColor = function (pos, col) {
        this.vertex.length = 0;
        this.color.length = 0;
        for (var i = 0; i < pos.length - 1; i++) {
            // 左上頂点
            var idx = i * 4;
            this.vertex.push(pos[i], -1.);
            this.color.push(col[idx], col[idx + 1], col[idx + 2], col[idx + 3]);
            // 左下頂点
            this.vertex.push(pos[i], 1.);
            this.color.push(col[idx], col[idx + 1], col[idx + 2], col[idx + 3]);
            // 右上頂点
            this.vertex.push(pos[i + 1], -1.);
            var nextIdx = (i + 1) * 4;
            this.color.push(col[nextIdx], col[nextIdx + 1], col[nextIdx + 2], col[nextIdx + 3]);
            // 左下頂点
            this.vertex.push(pos[i], 1.);
            this.color.push(col[idx], col[idx + 1], col[idx + 2], col[idx + 3]);
            // 右上頂点
            this.vertex.push(pos[i + 1], -1.);
            this.color.push(col[nextIdx], col[nextIdx + 1], col[nextIdx + 2], col[nextIdx + 3]);
            // 右上頂点
            this.vertex.push(pos[i + 1], 1.);
            this.color.push(col[nextIdx], col[nextIdx + 1], col[nextIdx + 2], col[nextIdx + 3]);
        }
    };
    // グラデーション作成する(オフスクリーン描画)
    GradationDrawer.prototype.makeGradation = function (gl, frameBuffer, type, matrix) {
        switch (type) {
            case GradationTool_1.GradationType.GradationTypeBlueRed:
                this.setVertexAndColor(blueRedPos, blueRedCol);
                var count = (blueRedPos.length - 1) * 2 * 3;
                this.gradation.makeGradation(gl, frameBuffer, this.vertex, this.color, count, matrix);
                break;
            case GradationTool_1.GradationType.GradationTypeToyCamera:
                this.setVertexAndColor(toyCameraPos, toyCameraCol);
                var count = (toyCameraPos.length - 1) * 2 * 3;
                this.gradation.makeGradation(gl, frameBuffer, this.vertex, this.color, count, matrix);
                break;
            case GradationTool_1.GradationType.GradationTypeRetro:
                this.setVertexAndColor(retroPos, retroCol);
                var count = (retroPos.length - 1) * 2 * 3;
                this.gradation.makeGradation(gl, frameBuffer, this.vertex, this.color, count, matrix);
                break;
        }
    };
    // テクスチャにグラデーションをかける
    GradationDrawer.prototype.drawGradation = function (gl, frameBuffer, texture, type, matrix) {
        this.makeGradation(gl, frameBuffer, type, matrix);
        this.shader.draw(gl, this.gradation.getTexture(), texture, matrix);
    };
    return GradationDrawer;
}());
exports.GradationDrawer = GradationDrawer;


/***/ }),

/***/ "./src/App/Effect/GradationTool.ts":
/*!*****************************************!*\
  !*** ./src/App/Effect/GradationTool.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GradationDrawer_1 = __webpack_require__(/*! ./GradationDrawer */ "./src/App/Effect/GradationDrawer.ts");
// グラデーションのタイプ
var GradationType;
(function (GradationType) {
    GradationType[GradationType["GradationTypeNone"] = 0] = "GradationTypeNone";
    GradationType[GradationType["GradationTypeBlueRed"] = 1] = "GradationTypeBlueRed";
    GradationType[GradationType["GradationTypeToyCamera"] = 2] = "GradationTypeToyCamera";
    GradationType[GradationType["GradationTypeRetro"] = 3] = "GradationTypeRetro";
})(GradationType = exports.GradationType || (exports.GradationType = {}));
// グラデーションを行うクラス
var GradationTool = /** @class */ (function () {
    // コンストラクタ
    function GradationTool(cnvs, manager) {
        this.canvas = cnvs;
        this.layerManager = manager;
        this.currentGradationType = GradationType.GradationTypeNone;
        this.drawer = new GradationDrawer_1.GradationDrawer();
    }
    // グラデーションタイプを取得する
    GradationTool.prototype.getGradationType = function () {
        return this.currentGradationType;
    };
    // グラデーションタイプを設定する
    GradationTool.prototype.setGradationType = function (type) {
        this.currentGradationType = type;
    };
    // 描画する
    GradationTool.prototype.draw = function () {
        var gl = this.canvas.getGL();
        var texture = this.layerManager.getCanvasLayer().getTexture();
        var matrix = this.canvas.getMatrix();
        var buffer = this.canvas.getFrameBuffer();
        this.drawer.drawGradation(gl, buffer, texture, this.currentGradationType, matrix);
    };
    return GradationTool;
}());
exports.GradationTool = GradationTool;


/***/ }),

/***/ "./src/App/Image/ImageDrawer.ts":
/*!**************************************!*\
  !*** ./src/App/Image/ImageDrawer.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ImageTexture_1 = __webpack_require__(/*! ../../Base/Texture/ImageTexture */ "./src/Base/Texture/ImageTexture.ts");
// 画像の書き出しを行うクラス
var ImageDrawer = /** @class */ (function () {
    // コンストラクタ
    function ImageDrawer() {
        this.image = new ImageTexture_1.ImageTexture();
    }
    // 画像を取得する
    ImageDrawer.prototype.getImageFile = function (files) {
        var length = files.length;
        var imageFile = null;
        for (var i = 0; i < length; i++) {
            if (!files[i] || files[i].type.indexOf('image/') < 0) {
                continue; // 画像ファイルではないとき
            }
            imageFile = files[i];
        }
        return imageFile;
    };
    // 画像テクスチャを描画する
    ImageDrawer.prototype.draw = function (gl, image) {
        this.image.makeImageTexture(gl, image);
    };
    // 画像テクスチャを取得する
    ImageDrawer.prototype.getImageTexture = function () {
        return this.image.getTexture();
    };
    return ImageDrawer;
}());
exports.ImageDrawer = ImageDrawer;


/***/ }),

/***/ "./src/App/LayerManager/LayerManager.ts":
/*!**********************************************!*\
  !*** ./src/App/LayerManager/LayerManager.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Layer_1 = __webpack_require__(/*! ../../Base/Layer/Layer */ "./src/Base/Layer/Layer.ts");
var ComposeNormalShader_1 = __webpack_require__(/*! ../../Base/Shader/ComposeNormalShader */ "./src/Base/Shader/ComposeNormalShader.ts");
var PointColorShader_1 = __webpack_require__(/*! ../../Base/Shader/PointColorShader */ "./src/Base/Shader/PointColorShader.ts");
var TextureShader_1 = __webpack_require__(/*! ../../Base/Shader/TextureShader */ "./src/Base/Shader/TextureShader.ts");
var Texture_1 = __webpack_require__(/*! ../../Base/Texture/Texture */ "./src/Base/Texture/Texture.ts");
var ID_CANVAS_LAYER = 1000; // キャンバスレイヤーのID
// レイヤーの管理クラス
var LayerManager = /** @class */ (function () {
    // コンストラクタ
    function LayerManager(cnvs) {
        this.layers = new Array();
        this.composeShader = new ComposeNormalShader_1.ComposeNormalShader();
        this.canvas = cnvs;
        this.initCanvasLayer();
    }
    // キャンバスレイヤーを初期化する
    LayerManager.prototype.initCanvasLayer = function () {
        var texture = new Texture_1.Texture();
        texture.makeTexture(this.canvas.getGL());
        var shader = new PointColorShader_1.PointColorShader();
        var position = [
            -1.0, 1.0,
            1.0, 1.0,
            -1.0, -1.0,
            -1.0, -1.0,
            1.0, 1.0,
            1.0, -1.0,
        ];
        var color = new Array();
        for (var i = 0; i < 6; i++) {
            color.push(1.0, 1.0, 1.0, 1.0);
        }
        shader.draw(this.canvas.getGL(), this.canvas.getFrameBuffer(), this.canvas.getGL().TRIANGLES, texture.getTexture(), position, color, 6, this.canvas.getMatrix());
        this.canvasLayer = new Layer_1.Layer(ID_CANVAS_LAYER, texture.getTexture());
    };
    // テクスチャを元にレイヤーを末尾に追加する
    LayerManager.prototype.addLayer = function (texture) {
        var id = this.layers.length;
        var layer = new Layer_1.Layer(id, texture);
        this.layers.push(layer);
        this.updateCanvas();
    };
    // キャンバスレイヤーを取得する
    LayerManager.prototype.getCanvasLayer = function () {
        return this.canvasLayer;
    };
    // レイヤーを合成する
    // テクスチャを下のレイヤーに合成する
    // layer2の管理はこのメソッドを呼び出した側で行う
    LayerManager.prototype.composeLayer = function (layer1, layer2) {
        var gl = this.canvas.getGL();
        var buffer = this.canvas.getFrameBuffer();
        var outTex = new Texture_1.Texture();
        outTex.makeTexture(gl);
        this.composeShader.draw(gl, buffer, layer2.getTexture(), layer1.getTexture(), outTex.getTexture(), this.canvas.getMatrix());
        layer1.setTexture(outTex.getTexture());
    };
    // 全てのレイヤーをキャンバスレイヤーに合成する
    LayerManager.prototype.composeToCanvas = function () {
        for (var i = 0; i < this.layers.length; i++) {
            this.composeLayer(this.canvasLayer, this.layers[i]);
        }
    };
    // キャンバスレイヤーの描画を更新する
    LayerManager.prototype.updateCanvas = function () {
        this.composeToCanvas();
        var shader = new TextureShader_1.TextureShader();
        shader.draw(this.canvas.getGL(), this.canvasLayer.getTexture(), this.canvas.getMatrix());
    };
    return LayerManager;
}());
exports.LayerManager = LayerManager;


/***/ }),

/***/ "./src/Base/Canvas/GlCanvas.ts":
/*!*************************************!*\
  !*** ./src/Base/Canvas/GlCanvas.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector_1 = __webpack_require__(/*! ../Math/Vector */ "./src/Base/Math/Vector.ts");
var Matrix_1 = __webpack_require__(/*! ../Math/Matrix */ "./src/Base/Math/Matrix.ts");
// キャンバスクラス
var GlCanvas = /** @class */ (function () {
    // コンストラクタ
    // @param canbasId キャンバスID
    // @param width 幅
    // @param height 高さ
    function GlCanvas(canvasId, width, height) {
        this.canvas = this.getCanvasContext(canvasId, width, height);
        this.gl = this.getGlContext();
        this.frameBuffer = this.gl.createFramebuffer();
        this.position = new Vector_1.Vector();
        this.scale = 1.0;
        this.degree = 0.0;
        this.matrix = new Matrix_1.Matrix();
    }
    // キャンバスコンテキストを取得する    
    // @param canbasId キャンバスID
    // @param width 幅
    // @param height 高さ
    GlCanvas.prototype.getCanvasContext = function (canvasId, width, height) {
        var cnvs = document.getElementById(canvasId);
        cnvs.width = width;
        cnvs.height = height;
        return cnvs;
    };
    // glコンテキストを取得する
    GlCanvas.prototype.getGlContext = function () {
        var gl = this.canvas.getContext("experimental-webgl", { preserveDrawingBuffer: true });
        if (!gl) { // コンテキストを取得できなかったとき
            return null;
        }
        this.initGlContext(gl);
        return gl;
    };
    // glコンテキストを初期化する
    GlCanvas.prototype.initGlContext = function (gl) {
        gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    };
    // キャンバスを取得する
    GlCanvas.prototype.getCanvas = function () {
        return this.canvas;
    };
    // glコンテキストを取得する
    GlCanvas.prototype.getGL = function () {
        return this.gl;
    };
    // フレームバッファを取得する
    GlCanvas.prototype.getFrameBuffer = function () {
        return this.frameBuffer;
    };
    // キャンバスサイズを設定する
    // @param width 幅
    // @param height 高さ
    GlCanvas.prototype.setCanvasSize = function (width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    };
    // キャンバスサイズを取得する
    GlCanvas.prototype.getCanvasSize = function () {
        var size = new Vector_1.Vector();
        size.setXY(this.canvas.width, this.canvas.height);
        return size;
    };
    // キャンバス上の座標を計算する
    GlCanvas.prototype.getCanvasCoordinate = function (event) {
        var cv = event.target;
        var rect = cv.getBoundingClientRect();
        var px = event.clientX - rect.left;
        var py = event.clientY - rect.top;
        var x = 2 * px / this.canvas.width - 1;
        var y = 2 * py / this.canvas.height - 1;
        var vec = new Vector_1.Vector();
        vec.setXY(px, py);
        return vec;
    };
    // キャンバス上の座標を設定する
    GlCanvas.prototype.setCanvasCoordinate = function (event) {
        this.position = this.getCanvasCoordinate(event);
        this.matrix.setMatrix(this.gl, this.position, this.degree, this.scale);
    };
    // 角度を設定する
    GlCanvas.prototype.setDegree = function (deg) {
        this.degree = deg;
        this.matrix.setMatrix(this.gl, this.position, this.degree, this.scale);
    };
    // 拡大率を設定する
    GlCanvas.prototype.setScale = function (aScale) {
        this.scale = aScale;
        this.matrix.setMatrix(this.gl, this.position, this.degree, this.scale);
    };
    // 行列を取得する
    GlCanvas.prototype.getMatrix = function () {
        return this.matrix.getMatrixArray();
    };
    // キャンバスを保存する
    GlCanvas.prototype.saveCanvas = function () {
        var imageType = "image/png";
        var fileName = "art_woerk.png";
        var dataUrl = this.canvas.toDataURL(imageType);
        var blob = this.Base64toBlob(dataUrl);
        this.saveBlob(blob, fileName);
    };
    // Base64データをBlob型に変換する
    // https://st40.xyz/one-run/article/133/
    GlCanvas.prototype.Base64toBlob = function (base64) {
        // カンマで分割して以下のようにデータを分ける
        // tmp[0] : データ形式（data:image/png;base64）
        // tmp[1] : base64データ（iVBORw0k～）
        var tmp = base64.split(',');
        // base64データの文字列をデコード
        var data = atob(tmp[1]);
        // tmp[0]の文字列（data:image/png;base64）からコンテンツタイプ（image/png）部分を取得
        var mime = tmp[0].split(':')[1].split(';')[0];
        //  1文字ごとにUTF-16コードを表す 0から65535 の整数を取得
        var buf = new Uint8Array(data.length);
        for (var i = 0; i < data.length; i++) {
            buf[i] = data.charCodeAt(i);
        }
        // blobデータを作成
        var blob = new Blob([buf], { type: mime });
        return blob;
    };
    // 画像をダウンロードする
    // https://st40.xyz/one-run/article/133/
    GlCanvas.prototype.saveBlob = function (blob, fileName) {
        var url = (window.URL);
        // ダウンロード用のURL作成
        var dataUrl = url.createObjectURL(blob);
        // イベント作成
        var event = document.createEvent("MouseEvents");
        event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        // a要素を作成
        var a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
        // ダウンロード用のURLセット
        a.href = dataUrl;
        // ファイル名セット
        a.download = fileName;
        // イベントの発火
        a.dispatchEvent(event);
    };
    return GlCanvas;
}());
exports.GlCanvas = GlCanvas;


/***/ }),

/***/ "./src/Base/Component/Knob.ts":
/*!************************************!*\
  !*** ./src/Base/Component/Knob.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector_1 = __webpack_require__(/*! ../Math/Vector */ "./src/Base/Math/Vector.ts");
var Matrix_1 = __webpack_require__(/*! ../Math/Matrix */ "./src/Base/Math/Matrix.ts");
var COLLUSION_OFFSET = 35;
// つまみクラス
var Knob = /** @class */ (function () {
    // コンストラクタ
    function Knob(id) {
        this.element = document.createElement('button');
        this.element.id = id;
        this.init();
    }
    // つまみを初期化する
    Knob.prototype.init = function () {
        this.element.style;
        this.element.style.backgroundColor = "rgb(100, 100, 100)";
        this.element.style.width = "12px";
        this.element.style.height = "12px";
        this.element.style.position = "absolute";
        this.element.style.zIndex = "99";
        this.element.style.borderRadius = "50%";
        this.element.style.display = "inline-block";
        this.element.style.pointerEvents = "none";
        this.element.disabled = true;
        this.canvasPosition = new Vector_1.Vector();
        this.globalPosition = new Vector_1.Vector();
        this.isSelected = false;
        this.isEnable = true;
        this.traslateMatrix = new Matrix_1.Matrix();
    };
    // アンカースタイルに変更する
    Knob.prototype.setAnchorStyle = function () {
        this.element.style.backgroundColor = "rgb(1, 175, 255)";
        var offset = new Vector_1.Vector();
        offset.setXY(100, 100);
        this.canvasPosition.add(offset);
        this.globalPosition.add(offset);
    };
    // つまみを親要素に追加する
    Knob.prototype.addKnob = function (parent, before) {
        parent.insertBefore(this.element, before);
    };
    // 選択されているか
    Knob.prototype.getIsSelected = function () {
        return this.isSelected;
    };
    // 選択状態を設定する
    Knob.prototype.setIsSelected = function (state) {
        if (this.isEnable) {
            this.isSelected = state;
        }
    };
    // 要素を取得する
    Knob.prototype.getElement = function () {
        return this.element;
    };
    // キャンバス上の位置を設定する
    Knob.prototype.setCanvasPosition = function (pos) {
        if (this.isEnable) {
            this.canvasPosition = pos;
        }
    };
    // キャンバス上の位置を取得する
    Knob.prototype.getCanvasPosition = function () {
        return this.canvasPosition;
    };
    // 親要素上の位置を設定する
    Knob.prototype.setGlobalPosition = function (pos) {
        if (this.isEnable) {
            this.globalPosition = pos;
        }
    };
    // 親要素上の位置を取得する
    Knob.prototype.getGlobalPosition = function () {
        return this.globalPosition;
    };
    // 有効かどうか設定する
    Knob.prototype.setIsEnable = function (state) {
        this.isEnable = state;
        if (this.isEnable) {
            this.showKnob();
        }
        else {
            this.hideKnob();
        }
    };
    // 有効かどうか取得する
    Knob.prototype.getIsEnable = function () {
        return this.isEnable;
    };
    // つまみを表示する
    Knob.prototype.showKnob = function () {
        this.init();
        this.element.style.display = "inline-block";
    };
    // つまみを隠す
    Knob.prototype.hideKnob = function () {
        this.element.style.display = "none";
    };
    // 当たり判定
    Knob.prototype.isCollusion = function (pos) {
        if (pos.getX() >= this.canvasPosition.getX() &&
            pos.getX() <= this.canvasPosition.getX() - this.element.clientWidth / 2 + COLLUSION_OFFSET &&
            pos.getY() >= this.canvasPosition.getY() &&
            pos.getY() <= this.canvasPosition.getY() + this.element.clientHeight / 2 + COLLUSION_OFFSET) {
            return true;
        }
        return false;
    };
    // 描画する
    Knob.prototype.draw = function () {
        this.traslateMatrix.setStyleTransform(this.element, this.globalPosition);
    };
    return Knob;
}());
exports.Knob = Knob;


/***/ }),

/***/ "./src/Base/Layer/Layer.ts":
/*!*********************************!*\
  !*** ./src/Base/Layer/Layer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// レイヤークラス
var Layer = /** @class */ (function () {
    // コンストラクタ
    function Layer(id, tex) {
        this.layerId = id;
        this.texture = tex;
    }
    // IDを取得する
    Layer.prototype.getLayerId = function () {
        return this.layerId;
    };
    // テクスチャを設定する
    Layer.prototype.setTexture = function (tex) {
        this.texture = tex;
    };
    // テクスチャを取得する
    Layer.prototype.getTexture = function () {
        return this.texture;
    };
    return Layer;
}());
exports.Layer = Layer;


/***/ }),

/***/ "./src/Base/Math/MathTool.ts":
/*!***********************************!*\
  !*** ./src/Base/Math/MathTool.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Mathクラス
var MathTools = /** @class */ (function () {
    // コンストラクタ
    function MathTools() {
    }
    // 角度をラジアンに変換する
    MathTools.prototype.deg2Rad = function (degree) {
        return degree * (Math.PI / 180);
    };
    // 階乗を計算する
    MathTools.prototype.calculateFactorial = function (n) {
        var ret = 1.0;
        for (var i = 2; i <= n; i++) {
            ret *= i;
        }
        return ret;
    };
    // 二項展開を計算する
    MathTools.prototype.calculateBinominal = function (n, i) {
        // 余分な部分を(n - i)で消す
        var numer = this.calculateFactorial(n);
        var denom = this.calculateFactorial(i) * this.calculateFactorial(n - i);
        return numer / denom;
    };
    // バーステイン基底関数を求める
    MathTools.prototype.calculateBerstein = function (n, i, t) {
        // 二項係数 * t^i * (1-t)^(n-i)
        var b = this.calculateBinominal(n, i);
        var t0 = Math.pow(t, i);
        var t1 = Math.pow(1 - t, n - i);
        return b * t0 * t1;
    };
    return MathTools;
}());
exports.MathTools = MathTools;


/***/ }),

/***/ "./src/Base/Math/Matrix.ts":
/*!*********************************!*\
  !*** ./src/Base/Math/Matrix.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MathTool_1 = __webpack_require__(/*! ./MathTool */ "./src/Base/Math/MathTool.ts");
var gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/src/gl-matrix.js");
// 行列クラス
var Matrix = /** @class */ (function () {
    // コンストラクタ
    function Matrix() {
        this.mMatrix = gl_matrix_1.mat4.create();
        this.vpMatrix = gl_matrix_1.mat4.create();
        this.mvpMatrix = gl_matrix_1.mat4.create();
        gl_matrix_1.mat4.identity(this.mMatrix);
        gl_matrix_1.mat4.identity(this.vpMatrix);
        gl_matrix_1.mat4.identity(this.mvpMatrix);
    }
    // ビュー行列とプロジェクション行列を設定する
    Matrix.prototype.setViewProjectionMatrix = function (gl) {
        var vMatrix = gl_matrix_1.mat4.create();
        var pMatrix = gl_matrix_1.mat4.create();
        gl_matrix_1.mat4.identity(vMatrix);
        // ビュー座標変換
        var eye = [0.0, 0.0, 1.0]; // カメラ位置
        var center = [0, 0, 0]; // 中視点
        var up = [0, 1, 0]; // カメラ上方向
        gl_matrix_1.mat4.lookAt(vMatrix, eye, center, up);
        // プロジェクション座標変換
        gl_matrix_1.mat4.identity(pMatrix);
        var fovy = 45; // 視野角
        var aspect = gl.canvas.width / gl.canvas.height; // アスペクト比
        var near = 0.1; // ニアクリップ
        var far = 100; // ファークリップ
        gl_matrix_1.mat4.perspective(pMatrix, fovy, aspect, near, far);
        gl_matrix_1.mat4.multiply(this.vpMatrix, pMatrix, vMatrix);
    };
    // モデルを移動する
    Matrix.prototype.translateModel = function (trans) {
        gl_matrix_1.mat4.identity(this.mMatrix);
        gl_matrix_1.mat4.translate(this.mMatrix, this.mMatrix, [trans.getX(), trans.getY(), 0.0]);
    };
    // モデルを回転する
    Matrix.prototype.rotateModel = function (degree) {
        var mt = new MathTool_1.MathTools();
        var rad = mt.deg2Rad(degree);
        var axis = [0.0, 0.0, 1.0];
        gl_matrix_1.mat4.rotate(this.mMatrix, this.mMatrix, rad, axis);
    };
    // モデルを拡大・縮小する
    Matrix.prototype.scaleModel = function (scale) {
        gl_matrix_1.mat4.scale(this.mMatrix, this.mMatrix, [scale, scale, scale]);
    };
    // 行列を設定する
    Matrix.prototype.setMatrix = function (gl, trans, degree, scale) {
        this.setViewProjectionMatrix(gl);
        this.translateModel(trans);
        this.rotateModel(degree);
        this.scaleModel(scale);
        this.setViewProjectionMatrix(gl);
        gl_matrix_1.mat4.multiply(this.mvpMatrix, this.mMatrix, this.vpMatrix);
    };
    // 行列を取得する
    // 行列を使用する側には配列で渡す
    Matrix.prototype.getMatrixArray = function () {
        return this.mvpMatrix;
    };
    // 行列を文字列で取得する
    Matrix.prototype.getMatrixString = function (pos) {
        var matrix = gl_matrix_1.mat4.create();
        gl_matrix_1.mat4.identity(matrix);
        gl_matrix_1.mat4.translate(matrix, matrix, [pos.getX(), pos.getY(), -1.0]);
        var rad = 0;
        var axis = [0.0, 0.0, 1.0];
        gl_matrix_1.mat4.rotate(matrix, matrix, rad, axis);
        gl_matrix_1.mat4.scale(matrix, matrix, [1, 1, 1]);
        return matrix.toString();
    };
    // trasfomr属性を設定する
    Matrix.prototype.setStyleTransform = function (element, pos) {
        var matrix = this.getMatrixString(pos);
        var matrixFunction = "matrix3d" + "(" + matrix + ")";
        element.style.transform = matrixFunction;
    };
    return Matrix;
}());
exports.Matrix = Matrix;


/***/ }),

/***/ "./src/Base/Math/Vector.ts":
/*!*********************************!*\
  !*** ./src/Base/Math/Vector.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// 2次元ベクトルクラス
var Vector = /** @class */ (function () {
    // コンストラクタ
    function Vector() {
        this.x = 0;
        this.y = 0;
    }
    // xを取得する
    Vector.prototype.getX = function () {
        return this.x;
    };
    // xを設定する
    Vector.prototype.setX = function (aX) {
        this.x = aX;
    };
    // yを取得する
    Vector.prototype.getY = function () {
        return this.y;
    };
    // yを設定する
    Vector.prototype.setY = function (aY) {
        this.y = aY;
    };
    // x,yを設定する
    Vector.prototype.setXY = function (aX, aY) {
        this.x = aX;
        this.y = aY;
    };
    // x,yを設定するVector版
    Vector.prototype.set = function (vec) {
        this.x = vec.x;
        this.y = vec.y;
    };
    // 加算する
    Vector.prototype.add = function (vec) {
        this.x += vec.x;
        this.y += vec.y;
    };
    // 減算する
    Vector.prototype.sub = function (vec) {
        this.x -= vec.x;
        this.y -= vec.y;
    };
    // 乗算する
    Vector.prototype.multiply = function (m) {
        this.x *= m;
        this.y *= m;
    };
    // 除算する
    Vector.prototype.divide = function (d) {
        this.x /= d;
        this.y /= d;
    };
    // 等しいか
    Vector.prototype.equals = function (vec) {
        return this.x === vec.x && this.y === vec.y;
    };
    // 距離を取得する
    Vector.prototype.distance = function (vec) {
        var dx = this.x - vec.x;
        var dy = this.y - vec.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    // 大きさを求める
    Vector.prototype.norm = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    return Vector;
}());
exports.Vector = Vector;


/***/ }),

/***/ "./src/Base/Shader/BrightnessContrastShader.ts":
/*!*****************************************************!*\
  !*** ./src/Base/Shader/BrightnessContrastShader.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shader_1 = __webpack_require__(/*! ./Shader */ "./src/Base/Shader/Shader.ts");
// バーテックスシェーダー
var vsVert = "attribute vec4 a_Position;\n"
    + "attribute vec2 u_TexCoord;\n"
    + "varying vec2 vTextureCoord;"
    + "uniform mat4 u_mvpMatrix;\n"
    + "void main() {\n"
    + "vTextureCoord = u_TexCoord;"
    + "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
    + "}";
// フラグメントシェーダー
var fsTex = "precision mediump float;\n"
    + "uniform sampler2D u_Sampler;\n"
    + "varying vec2 vTextureCoord;\n"
    + "uniform float u_Brightness;\n"
    + "uniform float u_Contrast;\n"
    + "void main() {\n"
    + "    vec4 tex = texture2D(u_Sampler, vTextureCoord);\n"
    + "    tex.rgb += u_Brightness;\n"
    + "    if (u_Contrast > 0.0) {\n"
    + "        tex.rgb = (tex.rgb - 0.5) / (1.0 - u_Contrast) + 0.5;\n"
    + "    } else {\n"
    + "        tex.rgb = (tex.rgb - 0.5) * (1.0 + u_Contrast) + 0.5;\n"
    + "    }\n"
    + "    gl_FragColor = tex;\n"
    + "}";
// 頂点座標
var position = [
    -1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    -1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
];
// テクスチャ座標
var textureCoord = [
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    0.0, 1.0,
    1.0, 0.0,
    1.0, 1.0,
];
// 明るさ・コントラストを調整するシェーダークラス
var BrightnessContrastShader = /** @class */ (function (_super) {
    __extends(BrightnessContrastShader, _super);
    // コンストラクタ
    function BrightnessContrastShader() {
        return _super.call(this) || this;
    }
    // 描画する
    BrightnessContrastShader.prototype.draw = function (gl, texture, matrix, brightness, contrast) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        var prg = this.getProgram(gl, vsVert, fsTex);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // インデックス取得
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var u_Sampler = gl.getUniformLocation(prg, "u_Sampler");
        var u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        var u_Brightness = gl.getUniformLocation(prg, "u_Brightness");
        var u_Contrast = gl.getUniformLocation(prg, "u_Contrast");
        // バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.uniform1f(u_Brightness, brightness);
        gl.uniform1f(u_Contrast, contrast);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    return BrightnessContrastShader;
}(Shader_1.Shader));
exports.BrightnessContrastShader = BrightnessContrastShader;


/***/ }),

/***/ "./src/Base/Shader/ComposeNormalShader.ts":
/*!************************************************!*\
  !*** ./src/Base/Shader/ComposeNormalShader.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shader_1 = __webpack_require__(/*! ./Shader */ "./src/Base/Shader/Shader.ts");
// バーテックスシェーダー
var vsVert = "attribute vec4 a_Position;\n"
    + "attribute vec2 u_TexCoord;\n"
    + "varying vec2 vTextureCoord;"
    + "uniform mat4 u_mvpMatrix;\n"
    + "void main() {\n"
    + "vTextureCoord = u_TexCoord;"
    + "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
    + "}";
// 普通合成
var fsNormal = "precision highp float;"
    + "uniform sampler2D u_SrcTexture;"
    + "uniform sampler2D u_DstTexture;"
    + "varying vec2 vTextureCoord;\n"
    + "void main() {\n"
    + "vec4 src = texture2D(u_SrcTexture, vTextureCoord);"
    + "vec4 dst = texture2D(u_DstTexture, vTextureCoord);"
    + "if (src.a != 0.) {\n"
    + "  gl_FragColor = src;\n"
    + "} else {\n"
    + "  gl_FragColor = dst;\n"
    + "}"
    + "}";
var fsNotImage = "precision highp float;"
    + "uniform sampler2D u_SrcTexture;"
    + "uniform sampler2D u_DstTexture;"
    + "varying vec2 vTextureCoord;\n"
    + "void main() {\n"
    + "vec4 src = texture2D(u_SrcTexture, vTextureCoord);"
    + "vec4 dst = texture2D(u_DstTexture, -vTextureCoord);"
    + "if (src.a != 0.) {\n"
    + "  gl_FragColor = src;\n"
    + "} else {\n"
    + "  gl_FragColor = dst;\n"
    + "}"
    + "}";
// 頂点座標
var position = [
    -1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    -1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
];
// テクスチャ座標
var textureCoord = [
    0.0, 1.0,
    1.0, 1.0,
    0.0, 0.0,
    0.0, 0.0,
    1.0, 1.0,
    1.0, 0.0
];
// 普通合成クラス
var ComposeNormalShader = /** @class */ (function (_super) {
    __extends(ComposeNormalShader, _super);
    // コンストラクタ
    function ComposeNormalShader() {
        return _super.call(this) || this;
    }
    // 描画する
    ComposeNormalShader.prototype.drawNotImage = function (gl, src, dst, matrix) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        var prg = this.getProgram(gl, vsVert, fsNotImage);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // 変数の取得
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var u_SrcTexture = gl.getUniformLocation(prg, "u_SrcTexture");
        var u_DstTexture = gl.getUniformLocation(prg, "u_DstTexture");
        var u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        // バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, src);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, dst);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_SrcTexture, 0);
        gl.uniform1i(u_DstTexture, 1);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        // 描画
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    // 描画する
    ComposeNormalShader.prototype.draw = function (gl, frameBuffer, src, dst, out, matrix) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        var prg = this.getProgram(gl, vsVert, fsNormal);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // 変数の取得
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var u_SrcTexture = gl.getUniformLocation(prg, "u_SrcTexture");
        var u_DstTexture = gl.getUniformLocation(prg, "u_DstTexture");
        var u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        // バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, src);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, dst);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_SrcTexture, 0);
        gl.uniform1i(u_DstTexture, 1);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        // フレームバッファをバインド
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, out, 0);
        // 描画
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        // バインドの解除
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };
    return ComposeNormalShader;
}(Shader_1.Shader));
exports.ComposeNormalShader = ComposeNormalShader;


/***/ }),

/***/ "./src/Base/Shader/ExpansionShader.ts":
/*!********************************************!*\
  !*** ./src/Base/Shader/ExpansionShader.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shader_1 = __webpack_require__(/*! ./Shader */ "./src/Base/Shader/Shader.ts");
// バーテックスシェーダー
var vsVert = "attribute vec4 a_Position;\n"
    + "attribute vec2 u_TexCoord;\n"
    + "varying vec2 vTextureCoord;"
    + "uniform mat4 u_mvpMatrix;\n"
    + "void main() {\n"
    + "vTextureCoord = u_TexCoord;"
    + "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
    + "}";
// フラグメントシェーダー
var fsTex = "precision mediump float;\n"
    + "uniform sampler2D u_Sampler;\n"
    + "uniform vec2 u_TexSize;\n"
    + "uniform float u_Radius;\n"
    + "uniform float u_Strength;\n"
    + "uniform vec2 u_Center;\n"
    + "varying vec2 vTextureCoord;\n"
    + "void main() {\n"
    + "    vec2 coord = vTextureCoord * u_TexSize;\n"
    + "    coord -= u_Center;\n"
    + "    float distance = length(coord);\n"
    + "    if (distance < u_Radius) {\n"
    + "        float percent = distance / u_Radius;\n"
    + "        if (u_Strength > 0.0) {\n"
    + "             coord *= mix(1.0, smoothstep(0.0, u_Radius / distance, percent), u_Strength * 0.75);\n"
    + "        } else {\n"
    + "             coord *= mix(1.0, pow(percent, 1.0 + u_Strength * 0.75) * u_Radius / distance, 1.0 - percent);\n"
    + "         }\n"
    + "    }\n"
    + "    coord += u_Center;\n"
    + "    gl_FragColor = texture2D(u_Sampler, coord / u_TexSize);\n"
    + "    vec2 clampedCoord = clamp(coord, vec2(0.0), u_TexSize);\n"
    + "    if (coord != clampedCoord) {\n"
    + "        gl_FragColor.a *= max(0.0, 1.0 - length(coord - clampedCoord));\n"
    + "    }\n"
    + "}";
// 頂点座標
var position = [
    -1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    -1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
];
// テクスチャ座標
var textureCoord = [
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    0.0, 1.0,
    1.0, 0.0,
    1.0, 1.0,
];
// 膨張シェーダークラス
var ExpansionShader = /** @class */ (function (_super) {
    __extends(ExpansionShader, _super);
    // コンストラクタ
    function ExpansionShader() {
        return _super.call(this) || this;
    }
    // 描画する
    ExpansionShader.prototype.draw = function (gl, texture, matrix, x, y, radius, strength) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        var prg = this.getProgram(gl, vsVert, fsTex);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // インデックス取得
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var u_Sampler = gl.getUniformLocation(prg, "u_Sampler");
        var u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        var u_TexSize = gl.getUniformLocation(prg, "u_TexSize");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        var u_Center = gl.getUniformLocation(prg, "u_Center");
        var u_Radius = gl.getUniformLocation(prg, "u_Radius");
        var u_Strength = gl.getUniformLocation(prg, "u_Strength");
        // バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.uniform2f(u_Center, x, y);
        gl.uniform2f(u_TexSize, gl.canvas.width, gl.canvas.height);
        gl.uniform1f(u_Radius, radius);
        gl.uniform1f(u_Strength, strength);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    return ExpansionShader;
}(Shader_1.Shader));
exports.ExpansionShader = ExpansionShader;


/***/ }),

/***/ "./src/Base/Shader/FrostedGlassShader.ts":
/*!***********************************************!*\
  !*** ./src/Base/Shader/FrostedGlassShader.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shader_1 = __webpack_require__(/*! ./Shader */ "./src/Base/Shader/Shader.ts");
// バーテックスシェーダー
var vsVert = "attribute vec4 a_Position;\n"
    + "attribute vec2 u_TexCoord;\n"
    + "varying vec2 vTextureCoord;"
    + "uniform mat4 u_mvpMatrix;\n"
    + "void main() {\n"
    + "vTextureCoord = u_TexCoord;"
    + "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
    + "}";
// フラグメントシェーダー
var fsTex = "precision mediump float;\n"
    + "uniform sampler2D u_Sampler;\n"
    + "varying vec2 vTextureCoord;\n"
    + "uniform float u_Radius;\n"
    + "uniform vec2 u_Resolution;\n"
    + "float rand(vec2 co) {\n"
    + "   float a = fract(dot(co, vec2(2.067390879775102, 12.451168662908249))) - 0.5;\n"
    + "   float s = a * (6.182785114200511 + a * a * (-38.026512460676566 + a * a * 53.392573080032137));\n"
    + "   float t = fract(s * 43758.5453);\n"
    + "   return t;\n"
    + "}\n"
    + "void main() {\n"
    + "    float radius = u_Radius;\n"
    + "    vec2 coord = vTextureCoord;\n"
    + "    float x = (coord.x * u_Resolution.x) + rand(coord) * radius * 2.0 - radius;\n"
    + "    float y = (coord.y * u_Resolution.y) + rand(vec2(coord.y, coord.x)) * radius * 2.0 - radius;\n"
    + "    gl_FragColor = texture2D(u_Sampler, vec2(x, y) / u_Resolution);\n"
    + "}";
// 頂点座標
var position = [
    -1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    -1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
];
// テクスチャ座標
var textureCoord = [
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    0.0, 1.0,
    1.0, 0.0,
    1.0, 1.0,
];
// 階調化描画するシェーダークラス
var ForestedGlassShader = /** @class */ (function (_super) {
    __extends(ForestedGlassShader, _super);
    // コンストラクタ
    function ForestedGlassShader() {
        return _super.call(this) || this;
    }
    // 描画する
    ForestedGlassShader.prototype.draw = function (gl, texture, matrix, radius) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        var prg = this.getProgram(gl, vsVert, fsTex);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // インデックス取得
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var u_Sampler = gl.getUniformLocation(prg, "u_Sampler");
        var u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        var u_Radius = gl.getUniformLocation(prg, "u_Radius");
        var u_Resolution = gl.getUniformLocation(prg, "u_Resolution");
        // バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.uniform1f(u_Radius, radius);
        gl.uniform2f(u_Resolution, gl.canvas.width, gl.canvas.height);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    return ForestedGlassShader;
}(Shader_1.Shader));
exports.ForestedGlassShader = ForestedGlassShader;


/***/ }),

/***/ "./src/Base/Shader/GradationShader.ts":
/*!********************************************!*\
  !*** ./src/Base/Shader/GradationShader.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shader_1 = __webpack_require__(/*! ./Shader */ "./src/Base/Shader/Shader.ts");
var vsVert = "attribute vec4 a_Position;\n"
    + "attribute vec2 u_TexCoord;\n"
    + "varying vec2 vTextureCoord;"
    + "uniform mat4 u_mvpMatrix;\n"
    + "void main() {\n"
    + "vTextureCoord = u_TexCoord;"
    + "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
    + "}";
var fsGrad = "precision highp float;"
    + "uniform sampler2D u_GradTexture;"
    + "uniform sampler2D u_SrcTexture;"
    + "varying vec2 vTextureCoord;\n"
    + "void main() {\n"
    + "vec4 src = texture2D(u_SrcTexture, vTextureCoord);"
    + "float y = 0.299 * src.r + 0.587 * src.g + 0.114 * src.b;"
    + "vec4 grad = texture2D(u_GradTexture, vec2(y, 0.5));"
    + "gl_FragColor = vec4(grad.r, grad.g, grad.b, src.a);\n"
    + "}";
// 頂点座標
var position = [
    -1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    -1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
];
// テクスチャ座標
var textureCoord = [
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    0.0, 1.0,
    1.0, 0.0,
    1.0, 1.0,
];
// グラデーションシェーダ
var GradationShader = /** @class */ (function (_super) {
    __extends(GradationShader, _super);
    // コンストラクタ
    function GradationShader() {
        return _super.call(this) || this;
    }
    // 描画する
    GradationShader.prototype.draw = function (gl, gradation, src, matrix) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        var prg = this.getProgram(gl, vsVert, fsGrad);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // インデックス取得
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var u_GradTexture = gl.getUniformLocation(prg, "u_GradTexture");
        var u_SrcTexture = gl.getUniformLocation(prg, "u_SrcTexture");
        var u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        // バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, gradation);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, src);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_GradTexture, 0);
        gl.uniform1i(u_SrcTexture, 1);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    return GradationShader;
}(Shader_1.Shader));
exports.GradationShader = GradationShader;


/***/ }),

/***/ "./src/Base/Shader/GrayscaleShader.ts":
/*!********************************************!*\
  !*** ./src/Base/Shader/GrayscaleShader.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shader_1 = __webpack_require__(/*! ./Shader */ "./src/Base/Shader/Shader.ts");
// バーテックスシェーダー
var vsVert = "attribute vec4 a_Position;\n"
    + "attribute vec2 u_TexCoord;\n"
    + "varying vec2 vTextureCoord;"
    + "uniform mat4 u_mvpMatrix;\n"
    + "void main() {\n"
    + "vTextureCoord = u_TexCoord;"
    + "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
    + "}";
// フラグメントシェーダー
var fsTex = "precision mediump float;\n"
    + "uniform sampler2D u_Sampler;\n"
    + "varying vec2 vTextureCoord;\n"
    + "void main() {\n"
    + "    vec4 tex = texture2D(u_Sampler, vTextureCoord);\n"
    + "    float y = 0.299 * tex.r + 0.587 * tex.g + 0.114 * tex.b;"
    + "    vec4 color = vec4(y, y, y, tex.a);"
    + "    gl_FragColor = color;\n"
    + "}";
// 頂点座標
var position = [
    -1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    -1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
];
// テクスチャ座標
var textureCoord = [
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    0.0, 1.0,
    1.0, 0.0,
    1.0, 1.0,
];
// グレースケール描画するシェーダークラス
var GrayscaleShader = /** @class */ (function (_super) {
    __extends(GrayscaleShader, _super);
    // コンストラクタ
    function GrayscaleShader() {
        return _super.call(this) || this;
    }
    // 描画する
    GrayscaleShader.prototype.draw = function (gl, texture, matrix) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        var prg = this.getProgram(gl, vsVert, fsTex);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // インデックス取得
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var u_Sampler = gl.getUniformLocation(prg, "u_Sampler");
        var u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        // バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    return GrayscaleShader;
}(Shader_1.Shader));
exports.GrayscaleShader = GrayscaleShader;


/***/ }),

/***/ "./src/Base/Shader/HueSaturationShader.ts":
/*!************************************************!*\
  !*** ./src/Base/Shader/HueSaturationShader.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shader_1 = __webpack_require__(/*! ./Shader */ "./src/Base/Shader/Shader.ts");
// バーテックスシェーダー
var vsVert = "attribute vec4 a_Position;\n"
    + "attribute vec2 u_TexCoord;\n"
    + "varying vec2 vTextureCoord;"
    + "uniform mat4 u_mvpMatrix;\n"
    + "void main() {\n"
    + "vTextureCoord = u_TexCoord;"
    + "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
    + "}";
// フラグメントシェーダー
var fsTex = "precision mediump float;\n"
    + "uniform sampler2D u_Sampler;\n"
    + "varying vec2 vTextureCoord;\n"
    + "uniform float u_Hue;\n"
    + "uniform float u_Saturation;\n"
    + "void main() {\n"
    + "    vec4 tex = texture2D(u_Sampler, vTextureCoord);\n"
    + "    float angle = u_Hue * 3.14159265;\n"
    + "    float s = sin(angle), c = cos(angle);\n"
    + "    vec3 weights = (vec3(2.0 * c, -sqrt(3.0) * s - c, sqrt(3.0)"
    + "                    * s - c) + 1.0) / 3.0;\n"
    + "    float len = length(tex.rgb);\n"
    + "    tex.rgb = vec3(dot(tex.rgb, weights.xyz),"
    + "                   dot(tex.rgb, weights.zxy),"
    + "                   dot(tex.rgb, weights.yzx));\n"
    + "    float average = (tex.r + tex.g + tex.b) / 3.0;\n"
    + "    if (u_Saturation > 0.0) {\n"
    + "        tex.rgb += (average - tex.rgb) * "
    + "                   (1.0 - 1.0 / (1.001 - u_Saturation));\n"
    + "    } else {\n"
    + "        tex.rgb += (average - tex.rgb) * (-u_Saturation);\n"
    + "    }\n"
    + "    gl_FragColor = tex;\n"
    + "}";
// 頂点座標
var position = [
    -1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    -1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
];
// テクスチャ座標
var textureCoord = [
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    0.0, 1.0,
    1.0, 0.0,
    1.0, 1.0,
];
// 明るさ・コントラストを調整するシェーダークラス
var HueSaturationShader = /** @class */ (function (_super) {
    __extends(HueSaturationShader, _super);
    // コンストラクタ
    function HueSaturationShader() {
        return _super.call(this) || this;
    }
    // 描画する
    HueSaturationShader.prototype.draw = function (gl, texture, matrix, hue, sarturation) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        var prg = this.getProgram(gl, vsVert, fsTex);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // インデックス取得
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var u_Sampler = gl.getUniformLocation(prg, "u_Sampler");
        var u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        var u_Hue = gl.getUniformLocation(prg, "u_Hue");
        var u_Saturation = gl.getUniformLocation(prg, "u_Saturation");
        // バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.uniform1f(u_Hue, hue);
        gl.uniform1f(u_Saturation, sarturation);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    return HueSaturationShader;
}(Shader_1.Shader));
exports.HueSaturationShader = HueSaturationShader;


/***/ }),

/***/ "./src/Base/Shader/InvertShader.ts":
/*!*****************************************!*\
  !*** ./src/Base/Shader/InvertShader.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shader_1 = __webpack_require__(/*! ./Shader */ "./src/Base/Shader/Shader.ts");
// バーテックスシェーダー
var vsVert = "attribute vec4 a_Position;\n"
    + "attribute vec2 u_TexCoord;\n"
    + "varying vec2 vTextureCoord;"
    + "uniform mat4 u_mvpMatrix;\n"
    + "void main() {\n"
    + "vTextureCoord = u_TexCoord;"
    + "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
    + "}";
// フラグメントシェーダー
var fsTex = "precision mediump float;\n"
    + "uniform sampler2D u_Sampler;\n"
    + "varying vec2 vTextureCoord;\n"
    + "void main() {\n"
    + "    vec4 tex = texture2D(u_Sampler, vTextureCoord);\n"
    + "    vec4 color = vec4(1.0 - tex.r, 1.0 - tex.g, 1.0 - tex.b,"
    + "                      tex.a); \n"
    + "    gl_FragColor = color;\n"
    + "}";
// 頂点座標
var position = [
    -1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    -1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
];
// テクスチャ座標
var textureCoord = [
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    0.0, 1.0,
    1.0, 0.0,
    1.0, 1.0,
];
// 色反転を描画するシェーダークラス
var InvertShader = /** @class */ (function (_super) {
    __extends(InvertShader, _super);
    // コンストラクタ
    function InvertShader() {
        return _super.call(this) || this;
    }
    // 描画する
    InvertShader.prototype.draw = function (gl, texture, matrix) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        var prg = this.getProgram(gl, vsVert, fsTex);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // インデックス取得
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var u_Sampler = gl.getUniformLocation(prg, "u_Sampler");
        var u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        // バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    return InvertShader;
}(Shader_1.Shader));
exports.InvertShader = InvertShader;


/***/ }),

/***/ "./src/Base/Shader/PixelateShader.ts":
/*!*******************************************!*\
  !*** ./src/Base/Shader/PixelateShader.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shader_1 = __webpack_require__(/*! ./Shader */ "./src/Base/Shader/Shader.ts");
// バーテックスシェーダー
var vsVert = "attribute vec4 a_Position;\n"
    + "attribute vec2 u_TexCoord;\n"
    + "varying vec2 vTextureCoord;"
    + "uniform mat4 u_mvpMatrix;\n"
    + "void main() {\n"
    + "vTextureCoord = u_TexCoord;"
    + "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
    + "}";
// フラグメントシェーダー
var fsTex = "precision mediump float;\n"
    + "uniform sampler2D u_Sampler;\n"
    + "uniform vec2 u_Center;\n"
    + "uniform float u_Scale;\n"
    + "uniform vec2 u_TexSize;\n"
    + "varying vec2 vTextureCoord;\n"
    + "void main() {\n"
    + "    vec2 tex = (vTextureCoord * u_TexSize - u_Center) / u_Scale;\n"
    + "    tex.y /= 0.866025404;\n"
    + "    tex.x -= tex.y * 0.5;\n"
    + "    vec2 a;\n"
    + "    if (tex.x + tex.y - floor(tex.x) - floor(tex.y) < 1.0) {\n"
    + "        a = vec2(floor(tex.x), floor(tex.y));\n"
    + "    } else {\n"
    + "        a = vec2(ceil(tex.x), ceil(tex.y));\n"
    + "    }\n"
    + "    vec2 b = vec2(ceil(tex.x), floor(tex.y));\n"
    + "    vec2 c = vec2(floor(tex.x), ceil(tex.y));\n"
    + "    vec3 TEX = vec3(tex.x, tex.y, 1.0 - tex.x - tex.y);\n"
    + "    vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);\n"
    + "    vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);\n"
    + "    vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);\n"
    + "    float alen = length(TEX - A);\n"
    + "    float blen = length(TEX - B);\n"
    + "    float clen = length(TEX - C);\n"
    + "vec2 choice;\n"
    + "if (alen < blen) {\n"
    + "    if (alen < clen) {\n"
    + "        choice = a;\n"
    + "    } else {\n"
    + "        choice = c;\n"
    + "    }\n"
    + "} else {\n"
    + "    if (blen < clen) {\n"
    + "        choice = b;\n"
    + "    } else {\n"
    + "        choice = c;\n"
    + "    }\n"
    + "}\n"
    + "choice.x += choice.y * 0.5;\n"
    + "choice.y *= 0.866025404;\n"
    + "choice *= u_Scale / u_TexSize;\n"
    + "gl_FragColor = texture2D(u_Sampler, choice + u_Center / u_TexSize);\n"
    + "}\n";
// 頂点座標
var position = [
    -1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    -1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
];
// テクスチャ座標
var textureCoord = [
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    0.0, 1.0,
    1.0, 0.0,
    1.0, 1.0,
];
// 六角形ピクセル化するシェーダークラス
var PixelateShader = /** @class */ (function (_super) {
    __extends(PixelateShader, _super);
    // コンストラクタ
    function PixelateShader() {
        return _super.call(this) || this;
    }
    // 描画する
    PixelateShader.prototype.draw = function (gl, texture, matrix, x, y, scale) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        var prg = this.getProgram(gl, vsVert, fsTex);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // インデックス取得
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var u_Sampler = gl.getUniformLocation(prg, "u_Sampler");
        var u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        var u_Scale = gl.getUniformLocation(prg, "u_Scale");
        var u_Center = gl.getUniformLocation(prg, "u_Center");
        var u_TexSize = gl.getUniformLocation(prg, "u_TexSize");
        // バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.uniform1f(u_Scale, scale);
        gl.uniform2f(u_TexSize, gl.canvas.width, gl.canvas.height);
        gl.uniform2f(u_Center, x, y);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    return PixelateShader;
}(Shader_1.Shader));
exports.PixelateShader = PixelateShader;


/***/ }),

/***/ "./src/Base/Shader/PointColorShader.ts":
/*!*********************************************!*\
  !*** ./src/Base/Shader/PointColorShader.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shader_1 = __webpack_require__(/*! ./Shader */ "./src/Base/Shader/Shader.ts");
var vsPC = "attribute vec4 a_Position;"
    + "attribute vec4 a_Color;"
    + "varying vec4 v_Color;"
    + "uniform mat4 u_mvpMatrix;\n"
    + "void main(){"
    + "    gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);"
    + "    v_Color = a_Color;"
    + "    gl_PointSize = 1.;"
    + "}";
var fsPC = "precision mediump float;"
    + "varying vec4 v_Color;"
    + "void main(){"
    + "    gl_FragColor = v_Color;"
    + "}";
// 頂点座標と頂点色を元にした描画を行うシェーダー
var PointColorShader = /** @class */ (function (_super) {
    __extends(PointColorShader, _super);
    // コンストラクタ
    function PointColorShader() {
        return _super.call(this) || this;
    }
    // 描画する
    PointColorShader.prototype.draw = function (gl, frameBuffer, mode, texture, points, color, count, matrix) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        var prg = this.getProgram(gl, vsPC, fsPC);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // 変数の取得
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var a_Color = gl.getAttribLocation(prg, "a_Color");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        // バッファのバインド
        var pointBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, points);
        var colorBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, color);
        // Attributeへのアタッチ
        this.setAttrib(gl, a_Position, 2, pointBuffer);
        this.setAttrib(gl, a_Color, 4, colorBuffer);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
        gl.drawArrays(mode, 0, count);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };
    return PointColorShader;
}(Shader_1.Shader));
exports.PointColorShader = PointColorShader;


/***/ }),

/***/ "./src/Base/Shader/PosterizationShader.ts":
/*!************************************************!*\
  !*** ./src/Base/Shader/PosterizationShader.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shader_1 = __webpack_require__(/*! ./Shader */ "./src/Base/Shader/Shader.ts");
// バーテックスシェーダー
var vsVert = "attribute vec4 a_Position;\n"
    + "attribute vec2 u_TexCoord;\n"
    + "varying vec2 vTextureCoord;"
    + "uniform mat4 u_mvpMatrix;\n"
    + "void main() {\n"
    + "vTextureCoord = u_TexCoord;"
    + "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
    + "}";
// フラグメントシェーダー
var fsTex = "precision mediump float;\n"
    + "uniform sampler2D u_Sampler;\n"
    + "varying vec2 vTextureCoord;\n"
    + "uniform float u_ToneLevel;\n"
    + "void main() {\n"
    + "    vec4 tex = texture2D(u_Sampler, vTextureCoord);\n"
    + "    float step = 1.0 / (u_ToneLevel - 1.0);"
    + "    float cr = step * floor(tex.r / step + 0.5);"
    + "    float cg = step * floor(tex.g / step + 0.5);"
    + "    float cb = step * floor(tex.b / step + 0.5);"
    + "    gl_FragColor = vec4(cr, cg, cb, tex.a);\n"
    + "}";
// 頂点座標
var position = [
    -1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    -1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
];
// テクスチャ座標
var textureCoord = [
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    0.0, 1.0,
    1.0, 0.0,
    1.0, 1.0,
];
// 階調化描画するシェーダークラス
var PosterizationShader = /** @class */ (function (_super) {
    __extends(PosterizationShader, _super);
    // コンストラクタ
    function PosterizationShader() {
        return _super.call(this) || this;
    }
    // 描画する
    PosterizationShader.prototype.draw = function (gl, texture, matrix, toneLevel) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        var prg = this.getProgram(gl, vsVert, fsTex);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // インデックス取得
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var u_Sampler = gl.getUniformLocation(prg, "u_Sampler");
        var u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        var u_ToneLevel = gl.getUniformLocation(prg, "u_ToneLevel");
        // バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.uniform1f(u_ToneLevel, toneLevel);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    return PosterizationShader;
}(Shader_1.Shader));
exports.PosterizationShader = PosterizationShader;


/***/ }),

/***/ "./src/Base/Shader/RandomSpouitShader.ts":
/*!***********************************************!*\
  !*** ./src/Base/Shader/RandomSpouitShader.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shader_1 = __webpack_require__(/*! ./Shader */ "./src/Base/Shader/Shader.ts");
// バーテックスシェーダー
var vsVert = "attribute vec4 a_Position;\n"
    + "attribute vec2 u_TexCoord;\n"
    + "varying vec2 vTextureCoord;"
    + "uniform mat4 u_mvpMatrix;\n"
    + "void main() {\n"
    + "vTextureCoord = u_TexCoord;"
    + "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
    + "}";
// フラグメントシェーダー
var fsTex = "precision mediump float;\n"
    + "uniform sampler2D u_Sampler;\n"
    + "varying vec2 vTextureCoord;\n"
    + "uniform float u_SeedCount;"
    + "float rand(vec2 co) {\n"
    + "   float a = fract(dot(co, vec2(2.067390879775102, 12.451168662908249))) - 0.5;\n"
    + "   float s = a * (6.182785114200511 + a * a * (-38.026512460676566 + a * a * 53.392573080032137));\n"
    + "   float t = fract(s * 43758.5453);\n"
    + "   return t;\n"
    + "}\n"
    + "void main() {\n"
    + "    vec4 tex = texture2D(u_Sampler, vec2(vTextureCoord.x,"
    + "                                    1. - vTextureCoord.y));\n"
    + "    if (rand(gl_FragCoord.xy) >= 0.95 + u_SeedCount) {"
    + "        gl_FragColor = tex;"
    + "    } else {"
    + "        gl_FragColor = vec4(0.);"
    + "    }\n"
    + "}";
// 頂点座標
var position = [
    -1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    -1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
];
// テクスチャ座標
var textureCoord = [
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    0.0, 1.0,
    1.0, 0.0,
    1.0, 1.0,
];
// テクスチャからランダムに色を取るシェーダー
var RandomSpouitShader = /** @class */ (function (_super) {
    __extends(RandomSpouitShader, _super);
    // コンストラクタ
    function RandomSpouitShader() {
        return _super.call(this) || this;
    }
    // 描画する
    RandomSpouitShader.prototype.draw = function (gl, frameBuffer, src, dst, matrix, seedCount) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        var prg = this.getProgram(gl, vsVert, fsTex);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // インデックス取得
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var u_Sampler = gl.getUniformLocation(prg, "u_Sampler");
        var u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        var u_SeedCount = gl.getUniformLocation(prg, "u_SeedCount");
        // バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, src);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.uniform1f(u_SeedCount, seedCount);
        // フレームバッファをバインド
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, dst, 0);
        // 描画
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        // バインドの解除
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };
    return RandomSpouitShader;
}(Shader_1.Shader));
exports.RandomSpouitShader = RandomSpouitShader;


/***/ }),

/***/ "./src/Base/Shader/SepiaShader.ts":
/*!****************************************!*\
  !*** ./src/Base/Shader/SepiaShader.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shader_1 = __webpack_require__(/*! ./Shader */ "./src/Base/Shader/Shader.ts");
// バーテックスシェーダー
var vsVert = "attribute vec4 a_Position;\n"
    + "attribute vec2 u_TexCoord;\n"
    + "varying vec2 vTextureCoord;"
    + "uniform mat4 u_mvpMatrix;\n"
    + "void main() {\n"
    + "vTextureCoord = u_TexCoord;"
    + "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
    + "}";
// フラグメントシェーダー
var fsTex = "precision mediump float;\n"
    + "uniform sampler2D u_Sampler;\n"
    + "varying vec2 vTextureCoord;\n"
    + "void main() {\n"
    + "    vec4 tex = texture2D(u_Sampler, vTextureCoord);\n"
    + "    float y = 0.299 * tex.r + 0.587 * tex.g + 0.114 * tex.b;"
    + "    vec4 color = vec4(0.95 * y, 0.7 * y, 0.4 * y, tex.a);"
    + "    gl_FragColor = color;\n"
    + "}";
// 頂点座標
var position = [
    -1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    -1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
];
// テクスチャ座標
var textureCoord = [
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    0.0, 1.0,
    1.0, 0.0,
    1.0, 1.0,
];
// セピア描画するシェーダークラス
var SepiaShader = /** @class */ (function (_super) {
    __extends(SepiaShader, _super);
    // コンストラクタ
    function SepiaShader() {
        return _super.call(this) || this;
    }
    // 描画する
    SepiaShader.prototype.draw = function (gl, texture, matrix) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        var prg = this.getProgram(gl, vsVert, fsTex);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // インデックス取得
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var u_Sampler = gl.getUniformLocation(prg, "u_Sampler");
        var u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        // バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    return SepiaShader;
}(Shader_1.Shader));
exports.SepiaShader = SepiaShader;


/***/ }),

/***/ "./src/Base/Shader/Shader.ts":
/*!***********************************!*\
  !*** ./src/Base/Shader/Shader.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// シェーダー基底クラス
var Shader = /** @class */ (function () {
    // コンストラクタ
    function Shader() {
    }
    // バッファオブジェクトを取得する
    Shader.prototype.createBufferObject = function (gl, target, data) {
        var buffer = gl.createBuffer();
        gl.bindBuffer(target, buffer);
        if (target === gl.ARRAY_BUFFER) {
            gl.bufferData(target, new Float32Array(data), gl.STATIC_DRAW);
        }
        else if (target === gl.ELEMENT_ARRAY_BUFFER) {
            gl.bufferData(target, new Int16Array(data), gl.STATIC_DRAW);
        }
        gl.bindBuffer(target, null);
        return buffer;
    };
    // バッファと変数を紐付ける
    Shader.prototype.setAttrib = function (gl, location, size, buffer) {
        gl.enableVertexAttribArray(location);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.vertexAttribPointer(location, size, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    };
    // シェーダーを作成する
    Shader.prototype.createShader = function (gl, type, source) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) { // シェーダーの作成に成功したとき
            return shader;
        }
        else { // シェーダーの作成に失敗したとき
            console.log(gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
    };
    // プログラムを作成する
    Shader.prototype.createProgram = function (gl, vertexShader, fragmentShader) {
        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        if (gl.getProgramParameter(program, gl.LINK_STATUS)) { // プログラムの作成に成功したとき
            return program;
        }
        else { // プログラムの作成に失敗したとき
            console.log(gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
            return null;
        }
    };
    // プログラムを取得する
    Shader.prototype.getProgram = function (gl, vSource, fSource) {
        var vShader = this.createShader(gl, gl.VERTEX_SHADER, vSource);
        var fShader = this.createShader(gl, gl.FRAGMENT_SHADER, fSource);
        return this.createProgram(gl, vShader, fShader);
    };
    return Shader;
}());
exports.Shader = Shader;


/***/ }),

/***/ "./src/Base/Shader/TextureShader.ts":
/*!******************************************!*\
  !*** ./src/Base/Shader/TextureShader.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shader_1 = __webpack_require__(/*! ./Shader */ "./src/Base/Shader/Shader.ts");
// バーテックスシェーダー
var vsVert = "attribute vec4 a_Position;\n"
    + "attribute vec2 u_TexCoord;\n"
    + "varying vec2 vTextureCoord;"
    + "uniform mat4 u_mvpMatrix;\n"
    + "void main() {\n"
    + "vTextureCoord = u_TexCoord;"
    + "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
    + "}";
// フラグメントシェーダー
var fsTex = "precision mediump float;\n"
    + "uniform sampler2D u_Sampler;\n"
    + "varying vec2 vTextureCoord;\n"
    + "void main() {\n"
    + "gl_FragColor = texture2D(u_Sampler, vTextureCoord);\n"
    + "}";
// 頂点座標
var position = [
    -1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    -1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
];
// テクスチャ座標
var textureCoord = [
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    0.0, 1.0,
    1.0, 0.0,
    1.0, 1.0,
];
// テクスチャを描画するシェーダークラス
var TextureShader = /** @class */ (function (_super) {
    __extends(TextureShader, _super);
    // コンストラクタ
    function TextureShader() {
        return _super.call(this) || this;
    }
    // 描画する
    TextureShader.prototype.draw = function (gl, texture, matrix) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        var prg = this.getProgram(gl, vsVert, fsTex);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // インデックス取得
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var u_Sampler = gl.getUniformLocation(prg, "u_Sampler");
        var u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        // バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    return TextureShader;
}(Shader_1.Shader));
exports.TextureShader = TextureShader;


/***/ }),

/***/ "./src/Base/Shader/ThresholdShader.ts":
/*!********************************************!*\
  !*** ./src/Base/Shader/ThresholdShader.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shader_1 = __webpack_require__(/*! ./Shader */ "./src/Base/Shader/Shader.ts");
// バーテックスシェーダー
var vsVert = "attribute vec4 a_Position;\n"
    + "attribute vec2 u_TexCoord;\n"
    + "varying vec2 vTextureCoord;"
    + "uniform mat4 u_mvpMatrix;\n"
    + "void main() {\n"
    + "vTextureCoord = u_TexCoord;"
    + "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
    + "}";
// フラグメントシェーダー
var fsTex = "precision mediump float;\n"
    + "uniform sampler2D u_Sampler;\n"
    + "varying vec2 vTextureCoord;\n"
    + "uniform float u_Threshold;\n"
    + "void main() {\n"
    + "    vec4 tex = texture2D(u_Sampler, vTextureCoord);\n"
    + "    float y = 0.299 * tex.r + 0.587 * tex.g + 0.114 * tex.b;"
    + "    if(y <= u_Threshold) {"
    + "        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n"
    + "    } else {"
    + "        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n"
    + "    }"
    + "}";
// 頂点座標
var position = [
    -1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    -1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
];
// テクスチャ座標
var textureCoord = [
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    0.0, 1.0,
    1.0, 0.0,
    1.0, 1.0,
];
// 2値化描画するシェーダークラス
var ThresholdShader = /** @class */ (function (_super) {
    __extends(ThresholdShader, _super);
    // コンストラクタ
    function ThresholdShader() {
        return _super.call(this) || this;
    }
    // 描画する
    ThresholdShader.prototype.draw = function (gl, texture, matrix, threshold) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        var prg = this.getProgram(gl, vsVert, fsTex);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // インデックス取得
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var u_Sampler = gl.getUniformLocation(prg, "u_Sampler");
        var u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        var u_Threshold = gl.getUniformLocation(prg, "u_Threshold");
        // バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.uniform1f(u_Threshold, threshold);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    return ThresholdShader;
}(Shader_1.Shader));
exports.ThresholdShader = ThresholdShader;


/***/ }),

/***/ "./src/Base/Shader/TranspalentColorShader.ts":
/*!***************************************************!*\
  !*** ./src/Base/Shader/TranspalentColorShader.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shader_1 = __webpack_require__(/*! ./Shader */ "./src/Base/Shader/Shader.ts");
// バーテックスシェーダー
var vsVert = "attribute vec4 a_Position;\n"
    + "attribute vec2 u_TexCoord;\n"
    + "varying vec2 vTextureCoord;"
    + "uniform mat4 u_mvpMatrix;\n"
    + "void main() {\n"
    + "vTextureCoord = u_TexCoord;"
    + "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
    + "}";
// フラグメントシェーダー
var fsTex = "precision mediump float;\n"
    + "uniform sampler2D u_Sampler;\n"
    + "varying vec2 vTextureCoord;\n"
    + "uniform float u_Threshold;\n"
    + "void main() {\n"
    + "    vec4 tex = texture2D(u_Sampler, vTextureCoord);\n"
    + "     if (tex.r >= u_Threshold && tex.g >= u_Threshold && tex.b >= u_Threshold) {"
    + "         gl_FragColor = vec4(1.0, 1.0, 1.0, 0.0);"
    + "     } else {"
    + "         gl_FragColor = tex;\n"
    + "     }"
    + "}";
// 頂点座標
var position = [
    -1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    -1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
];
// テクスチャ座標
var textureCoord = [
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    0.0, 1.0,
    1.0, 0.0,
    1.0, 1.0,
];
// 透明化(カラー)描画するシェーダークラス
var TranspalentColorShader = /** @class */ (function (_super) {
    __extends(TranspalentColorShader, _super);
    // コンストラクタ
    function TranspalentColorShader() {
        return _super.call(this) || this;
    }
    // 描画する
    TranspalentColorShader.prototype.draw = function (gl, texture, matrix, threshold) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        var prg = this.getProgram(gl, vsVert, fsTex);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // インデックス取得
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var u_Sampler = gl.getUniformLocation(prg, "u_Sampler");
        var u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        var u_Threshold = gl.getUniformLocation(prg, "u_Threshold");
        // バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.uniform1f(u_Threshold, threshold);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    return TranspalentColorShader;
}(Shader_1.Shader));
exports.TranspalentColorShader = TranspalentColorShader;


/***/ }),

/***/ "./src/Base/Shader/VoronoiShader.ts":
/*!******************************************!*\
  !*** ./src/Base/Shader/VoronoiShader.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shader_1 = __webpack_require__(/*! ./Shader */ "./src/Base/Shader/Shader.ts");
// バーテックスシェーダー
var vsVert = "attribute vec4 a_Position;\n"
    + "attribute vec2 u_TexCoord;\n"
    + "varying vec2 vTextureCoord;"
    + "uniform mat4 u_mvpMatrix;\n"
    + "void main() {\n"
    + "vTextureCoord = u_TexCoord;"
    + "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
    + "}";
// Readテクスチャ用のシェーダー
// 母点に対応していれば座標をテクスチャに格納する
var fsRead = "precision highp float;\n"
    + "uniform sampler2D u_Sampler;\n"
    + "varying vec2 vTextureCoord;\n"
    + "uniform vec2 u_Resolution;\n"
    // 近似しているか(vec4版)
    + "bool approxEqual(const vec4 a, const vec4 b) {\n"
    + "    return all(lessThan(abs(a - b), vec4(0.005)));\n"
    + "}\n"
    // 母点座標をテクスチャに保存するために変換する
    + "vec2 encodeCoordinate(const float value) {\n"
    + "   float v = value;\n"
    + "   return vec2(floor(v / 100.), mod(v, 100.));\n"
    + "}\n"
    // 座標を格納したピクセルを作る
    + "vec4 createPixcel(const vec2 coord) {\n"
    + "    vec2 c = floor(coord);\n"
    + "    vec2 rg = encodeCoordinate(c.x);\n"
    + "    vec2 ba = encodeCoordinate(c.y);\n"
    + "    return vec4(rg, ba) / 255.;\n"
    + "}"
    // 無効なピクセルを作る
    + "vec4 createInvalidPixcel() {\n"
    + "    return createPixcel(vec2(5000., 5000.));\n"
    + "}\n"
    + "void main() {\n"
    + "    vec2 coord = gl_FragCoord.xy / u_Resolution;\n"
    + "    vec4 pixel = texture2D(u_Sampler, vec2(coord.x, 1. - coord.y));\n"
    + "    if (!approxEqual(pixel, vec4(0.))) {\n" // 母点対応点
    + "        gl_FragColor = createPixcel(gl_FragCoord.xy);\n"
    + "    } else {\n" // 母点に対応しない点
    + "        gl_FragColor = createInvalidPixcel();\n"
    + "    }\n"
    + "}";
// Writeテクスチャ用のシェーダー
// 近傍のピクセルを読んで自身の色を決定する
var fsWrite = "precision highp float;\n"
    + "uniform sampler2D u_Sampler;\n"
    + "uniform int u_stepSize;\n"
    + "varying vec2 vTextureCoord;\n"
    + "uniform vec2 u_Resolution;\n"
    // 矩形内にあるか
    + "bool between(const vec2 value, const vec2 bottom, const vec2 top) {\n"
    + "   return (all(greaterThan(value, bottom)) && "
    + "           all(lessThan(value, top)));\n"
    + "}\n"
    // UV座標系におさまっているか
    + "bool isValidUv(const vec2 uv) {\n"
    + "return between(uv, vec2(0., 0.), vec2(1., 1.));\n"
    + "}\n"
    // 座標をデコードする
    + "float decodeCoordinate(const vec2 encodedCoordinate) {\n"
    + "   return encodedCoordinate.x * 100. + encodedCoordinate.y;\n"
    + "}\n"
    // 母点近傍の座標を返す
    + "vec2 getSeedClosestCoord(const vec4 pixel) {\n"
    + "    vec4 p = pixel * 255.;\n"
    + "    float x = decodeCoordinate(p.rg);\n"
    + "    float y = decodeCoordinate(p.ba);\n"
    + "    return vec2(x, y) + vec2(0.5);\n"
    + "}\n"
    // 有効なピクセルか
    + "bool isValidPixel(const vec4 pixel) {\n"
    + "    vec2 coord = getSeedClosestCoord(pixel);\n"
    + "    return coord.x < 4999.;\n"
    + "}\n"
    // 母点座標をテクスチャに保存するために変換する
    + "vec2 encodeCoordinate(const float value) {\n"
    + "   float v = value;\n"
    + "   return vec2(floor(v / 100.), mod(v, 100.));\n"
    + "}\n"
    // 座標を格納したピクセルを作る
    + "vec4 createPixcel(const vec2 coord) {\n"
    + "    vec2 c = floor(coord);\n"
    + "    vec2 rg = encodeCoordinate(c.x);\n"
    + "    vec2 ba = encodeCoordinate(c.y);\n"
    + "    return vec4(rg, ba) / 255.;\n"
    + "}"
    // 無効なピクセルを作る
    + "vec4 createInvalidPixcel() {\n"
    + "    return createPixcel(vec2(5000., 5000.));\n"
    + "}\n"
    // JFAを計算する(対応する座標を格納する)
    + "vec4 jumpFlood(vec4 curPixel, vec2 offset) {\n"
    + "    vec2 refCoord = (gl_FragCoord.xy + offset) / u_Resolution;;\n"
    + "    vec4 refPixel = texture2D(u_Sampler, refCoord);\n"
    + "    if (!isValidUv(refCoord)) {\n"
    + "        refPixel = createInvalidPixcel();\n"
    + "    }\n"
    + "    if (!isValidPixel(refPixel)) {\n" //参照ピクセル無効のとき
    + "        return curPixel;\n"
    + "    } else if (!isValidPixel(curPixel)) {\n" // カレント無効のとき
    + "        return refPixel;\n"
    + "    } else {\n" // どちらも有効のとき
    + "        vec2 decodeC = getSeedClosestCoord(curPixel);\n"
    + "        vec2 decodeR = getSeedClosestCoord(refPixel);\n"
    + "        float disC = distance(gl_FragCoord.xy, decodeC);\n"
    + "        float disR = distance(gl_FragCoord.xy, decodeR);\n"
    + "        if (disC > disR) {\n" // カレントピクセルの方が遠いとき
    + "            return refPixel;\n"
    + "        }"
    + "    }\n"
    + "    return curPixel;"
    + "}\n"
    + "void main(){"
    + "   vec4 curPixel = texture2D(u_Sampler, gl_FragCoord.xy /"
    + "                                                   u_Resolution);"
    + "    curPixel = jumpFlood(curPixel, vec2(0, u_stepSize));"
    + "    curPixel = jumpFlood(curPixel, vec2(u_stepSize, u_stepSize));"
    + "    curPixel = jumpFlood(curPixel, vec2(u_stepSize, 0));"
    + "    curPixel = jumpFlood(curPixel, vec2(u_stepSize, -u_stepSize));"
    + "    curPixel = jumpFlood(curPixel, vec2(0, -u_stepSize));"
    + "    curPixel = jumpFlood(curPixel, vec2(-u_stepSize, -u_stepSize));"
    + "    curPixel = jumpFlood(curPixel, vec2(-u_stepSize, 0));"
    + "    curPixel = jumpFlood(curPixel, vec2(-u_stepSize, u_stepSize));"
    + "    gl_FragColor = curPixel;"
    + "}";
// ボロノイ描画用のシェーダー
var fsVornoi = "precision highp float;"
    + "uniform sampler2D u_SeedTex;"
    + "uniform sampler2D u_JumpFloodTex;"
    + "varying vec2 vTextureCoord;\n"
    + "uniform vec2 u_Resolution;\n"
    // 座標をデコードする
    + "float decodeCoordinate(const vec2 encodedCoordinate) {"
    + "   return encodedCoordinate.x * 100. + encodedCoordinate.y;"
    + "}"
    // 母点近傍の座標を返す
    + "vec2 getSeedClosestCoord(const vec4 pixel) {"
    + "    vec4 p = pixel * 255.;"
    + "    float x = decodeCoordinate(p.rg);"
    + "    float y = decodeCoordinate(p.ba);"
    + "    return vec2(x, y) + vec2(0.5);"
    + "}"
    // 有効なピクセルか
    + "bool isValidPixel(const vec4 pixel) {\n"
    + "    vec2 coord = getSeedClosestCoord(pixel);\n"
    + "    return coord.x < 4999.;\n"
    + "}\n"
    + "void main() {"
    + "    vec4 pixel = texture2D(u_JumpFloodTex, gl_FragCoord.xy /"
    + "                                           u_Resolution);"
    + "    if (isValidPixel(pixel)) {"
    + "        vec2 coord = getSeedClosestCoord(pixel) / u_Resolution;"
    + "        gl_FragColor=texture2D(u_SeedTex,vec2(coord.x, 1.- coord.y));"
    + "    } else {"
    + "        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);"
    + "    }"
    + "}";
// 距離マップ描画用のシェーダー
var fsDis = "precision highp float;"
    + "uniform sampler2D u_SeedTex;"
    + "uniform sampler2D u_JumpFloodTex;"
    + "varying vec2 vTextureCoord;\n"
    + "uniform vec2 u_Resolution;\n"
    // 座標をデコードする
    + "float decodeCoordinate(const vec2 encodedCoordinate) {"
    + "   return encodedCoordinate.x * 100. + encodedCoordinate.y;"
    + "}"
    // 母点近傍の座標を返す
    + "vec2 getSeedClosestCoord(const vec4 pixel) {"
    + "    vec4 p = pixel * 255.;"
    + "    float x = decodeCoordinate(p.rg);"
    + "    float y = decodeCoordinate(p.ba);"
    + "    return vec2(x, y) + vec2(0.5);"
    + "}"
    // 有効なピクセルか
    + "bool isValidPixel(const vec4 pixel) {\n"
    + "    vec2 coord = getSeedClosestCoord(pixel);\n"
    + "    return coord.x < 4999.;\n"
    + "}\n"
    + "void main() {"
    + "    vec4 pixel = texture2D(u_JumpFloodTex, gl_FragCoord.xy /"
    + "                                           u_Resolution);"
    + "    vec2 coord = getSeedClosestCoord(pixel);"
    + "    float dist = distance(gl_FragCoord.xy, coord);"
    + "    dist = 1.0 - (dist / u_Resolution.x) / 0.7;"
    + "    gl_FragColor = vec4(dist, dist, dist, 1.0);"
    + "}";
// 頂点座標
var position = [
    -1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    -1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
];
// テクスチャ座標
var textureCoord = [
    0.0, 1.0,
    1.0, 1.0,
    0.0, 0.0,
    0.0, 0.0,
    1.0, 1.0,
    1.0, 0.0
];
// ボロノイ分割を計算するシェーダークラス
var VoronoiShader = /** @class */ (function (_super) {
    __extends(VoronoiShader, _super);
    // コンストラクタ
    function VoronoiShader() {
        var _this = _super.call(this) || this;
        _this.program = null;
        _this.readProgram = null;
        _this.writeProgram = null;
        _this.voronoiProgram = null;
        _this.distanceProgram = null;
        return _this;
    }
    // プログラムを準備する
    VoronoiShader.prototype.prepareProgram = function (gl) {
        this.readProgram = this.getProgram(gl, vsVert, fsRead);
        this.writeProgram = this.getProgram(gl, vsVert, fsWrite);
        this.voronoiProgram = this.getProgram(gl, vsVert, fsVornoi);
        this.distanceProgram = this.getProgram(gl, vsVert, fsDis);
    };
    // Readテクスチャを作成する
    VoronoiShader.prototype.makeReadTexture = function (gl, frameBuffer, src, dst, matrix) {
        gl.useProgram(this.readProgram);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // インデックス取得
        var a_Position = gl.getAttribLocation(this.readProgram, "a_Position");
        var u_Sampler = gl.getUniformLocation(this.readProgram, "u_Sampler");
        var u_TexCoord = gl.getAttribLocation(this.readProgram, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(this.readProgram, "u_mvpMatrix");
        var u_Resolution = gl.getUniformLocation(this.readProgram, "u_Resolution");
        //　バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, src);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.uniform2f(u_Resolution, gl.canvas.width, gl.canvas.height);
        // フレームバッファをバインド
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, dst, 0);
        // 描画
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        // バインドの解除
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };
    // JFAを実行する
    VoronoiShader.prototype.runJumpFlood = function (gl, frameBuffer, src, dst, matrix, step) {
        gl.useProgram(this.writeProgram);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        var a_Position = gl.getAttribLocation(this.writeProgram, "a_Position");
        var u_Sampler = gl.getUniformLocation(this.writeProgram, "u_Sampler");
        var u_TexCoord = gl.getAttribLocation(this.writeProgram, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(this.writeProgram, "u_mvpMatrix");
        var u_stepSize = gl.getUniformLocation(this.writeProgram, "u_stepSize");
        var u_Resolution = gl.getUniformLocation(this.writeProgram, "u_Resolution");
        //　バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, src);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.uniform1i(u_stepSize, step);
        gl.uniform2f(u_Resolution, gl.canvas.width, gl.canvas.height);
        // フレームバッファをバインド
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, dst, 0);
        // 描画
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        // バインドの解除
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };
    // ボロノイ分割の共通処理を行う
    VoronoiShader.prototype.runDrawVoronoiCommon = function (gl, prg, origin, jumped, matrix) {
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var u_SeedTex = gl.getUniformLocation(prg, "u_SeedTex");
        var u_JumpFloodTex = gl.getUniformLocation(prg, "u_JumpFloodTex");
        var u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        var u_Resolution = gl.getUniformLocation(prg, "u_Resolution");
        //　バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, origin);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, jumped);
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_SeedTex, 0);
        gl.uniform1i(u_JumpFloodTex, 1);
        gl.uniform2f(u_Resolution, gl.canvas.width, gl.canvas.height);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
    };
    // ボロノイ分割を描画する
    VoronoiShader.prototype.drawVoronoi = function (gl, origin, jumped, matrix) {
        this.runDrawVoronoiCommon(gl, this.voronoiProgram, origin, jumped, matrix);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    // 距離マップを描画する
    VoronoiShader.prototype.drawDistanceMap = function (gl, origin, jumped, matrix) {
        this.runDrawVoronoiCommon(gl, this.distanceProgram, origin, jumped, matrix);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    return VoronoiShader;
}(Shader_1.Shader));
exports.VoronoiShader = VoronoiShader;


/***/ }),

/***/ "./src/Base/Shader/ZoomBlurShader.ts":
/*!*******************************************!*\
  !*** ./src/Base/Shader/ZoomBlurShader.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shader_1 = __webpack_require__(/*! ./Shader */ "./src/Base/Shader/Shader.ts");
// バーテックスシェーダー
var vsVert = "attribute vec4 a_Position;\n"
    + "attribute vec2 u_TexCoord;\n"
    + "varying vec2 vTextureCoord;"
    + "uniform mat4 u_mvpMatrix;\n"
    + "void main() {\n"
    + "vTextureCoord = u_TexCoord;"
    + "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
    + "}";
// フラグメントシェーダー
var fsTex = "precision mediump float;\n"
    + "uniform sampler2D u_Sampler;\n"
    + "varying vec2 vTextureCoord;\n"
    + "uniform vec2 u_TexSize;\n"
    + "uniform vec2 u_Center;\n"
    + "uniform float u_Strength;\n"
    // すりガラスシェーダーのランダムより高品質か
    + "float random(vec3 scale, float seed) {\n"
    + "  return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) *"
    + "               43758.5453 + seed);\n"
    + "}\n"
    + "void main() {\n"
    + "    vec4 color = vec4(0.0);\n"
    + "    float total = 0.0;\n"
    + "    vec2 toCenter = u_Center - vTextureCoord * u_TexSize;\n"
    + "    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n"
    + "    for (float t = 0.0; t <= 40.0; t++) {\n"
    + "        float percent = (t + offset) / 40.0;\n"
    + "        float weight = 4.0 * (percent - percent * percent);\n"
    + "        vec4 tex = texture2D(u_Sampler, vTextureCoord + toCenter *"
    + "                             percent * u_Strength / u_TexSize);\n"
    + "        tex.rgb *= tex.a;\n"
    + "        color += tex * weight;\n"
    + "        total += weight;\n"
    + "    }"
    + "    gl_FragColor = color / total;\n"
    + "    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n"
    + "}";
// 頂点座標
var position = [
    -1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    -1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, -1.0, 0.0,
];
// テクスチャ座標
var textureCoord = [
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    0.0, 1.0,
    1.0, 0.0,
    1.0, 1.0,
];
// ズームぼかしシェーダークラス
// 参考(https://github.com/evanw/glfx.js)
var ZoomBlurShader = /** @class */ (function (_super) {
    __extends(ZoomBlurShader, _super);
    // コンストラクタ
    function ZoomBlurShader() {
        return _super.call(this) || this;
    }
    // 描画する
    ZoomBlurShader.prototype.draw = function (gl, texture, matrix, x, y, strength) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        var prg = this.getProgram(gl, vsVert, fsTex);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        // インデックス取得
        var a_Position = gl.getAttribLocation(prg, "a_Position");
        var u_Sampler = gl.getUniformLocation(prg, "u_Sampler");
        var u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        var u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        var u_TexSize = gl.getUniformLocation(prg, "u_TexSize");
        var u_Center = gl.getUniformLocation(prg, "u_Center");
        var u_Strength = gl.getUniformLocation(prg, "u_Strength");
        // バッファ処理
        var posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        var texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);
        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.uniform2f(u_TexSize, gl.canvas.width, gl.canvas.height);
        gl.uniform2f(u_Center, x, y);
        gl.uniform1f(u_Strength, strength);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    return ZoomBlurShader;
}(Shader_1.Shader));
exports.ZoomBlurShader = ZoomBlurShader;


/***/ }),

/***/ "./src/Base/Texture/GradationTexture.ts":
/*!**********************************************!*\
  !*** ./src/Base/Texture/GradationTexture.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Texture_1 = __webpack_require__(/*! ./Texture */ "./src/Base/Texture/Texture.ts");
var PointColorShader_1 = __webpack_require__(/*! ../Shader/PointColorShader */ "./src/Base/Shader/PointColorShader.ts");
// グラデーションテクスチャクラス
var GradationTexture = /** @class */ (function (_super) {
    __extends(GradationTexture, _super);
    // コンストラクタ
    function GradationTexture() {
        return _super.call(this) || this;
    }
    // グラデーションテクスチャを作成する
    GradationTexture.prototype.makeGradation = function (gl, frameBuffer, points, color, count, matrix) {
        var shader = new PointColorShader_1.PointColorShader();
        this.makeTexture(gl);
        shader.draw(gl, frameBuffer, gl.TRIANGLES, this.texture, points, color, count, matrix);
    };
    return GradationTexture;
}(Texture_1.Texture));
exports.GradationTexture = GradationTexture;


/***/ }),

/***/ "./src/Base/Texture/ImageTexture.ts":
/*!******************************************!*\
  !*** ./src/Base/Texture/ImageTexture.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Texture_1 = __webpack_require__(/*! ./Texture */ "./src/Base/Texture/Texture.ts");
// 画像テクスチャクラス
var ImageTexture = /** @class */ (function (_super) {
    __extends(ImageTexture, _super);
    // コンストラクタ
    function ImageTexture() {
        return _super.call(this) || this;
    }
    // 画像テクスチャを作成する
    ImageTexture.prototype.makeImageTexture = function (gl, image) {
        this.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        gl.bindTexture(gl.TEXTURE_2D, null);
    };
    return ImageTexture;
}(Texture_1.Texture));
exports.ImageTexture = ImageTexture;


/***/ }),

/***/ "./src/Base/Texture/Texture.ts":
/*!*************************************!*\
  !*** ./src/Base/Texture/Texture.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// テクスチャ基底クラス
var Texture = /** @class */ (function () {
    // コンストラクタ
    function Texture() {
    }
    // 空のテクスチャを作成する
    Texture.prototype.makeTexture = function (gl) {
        this.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.canvas.width, gl.canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.bindTexture(gl.TEXTURE_2D, null);
    };
    // テクスチャを取得する
    Texture.prototype.getTexture = function () {
        return this.texture;
    };
    return Texture;
}());
exports.Texture = Texture;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GlCanvas_1 = __webpack_require__(/*! ./Base/Canvas/GlCanvas */ "./src/Base/Canvas/GlCanvas.ts");
var LayerManager_1 = __webpack_require__(/*! ./App/LayerManager/LayerManager */ "./src/App/LayerManager/LayerManager.ts");
var ImageDrawer_1 = __webpack_require__(/*! ./App/Image/ImageDrawer */ "./src/App/Image/ImageDrawer.ts");
var Vector_1 = __webpack_require__(/*! ./Base/Math/Vector */ "./src/Base/Math/Vector.ts");
var gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/src/gl-matrix.js");
var EffectTool_1 = __webpack_require__(/*! ./App/Effect/EffectTool */ "./src/App/Effect/EffectTool.ts");
var Knob_1 = __webpack_require__(/*! ./Base/Component/Knob */ "./src/Base/Component/Knob.ts");
var GradationTool_1 = __webpack_require__(/*! ./App/Effect/GradationTool */ "./src/App/Effect/GradationTool.ts");
var AdditionalTool_1 = __webpack_require__(/*! ./App/Additonal/AdditionalTool */ "./src/App/Additonal/AdditionalTool.ts");
var CANVAS_ID = "canvas"; // キャンバスID
var CANVAS_WIDTH = 512; // キャンバス幅
var CANVAS_HEIGHT = 512; // キャンバス高さ
var CANVAS_INITIAL_POSITION_X = 250; // キャンバス初期位置のX座標
var CANVAS_INITIAL_POSITION_Y = 100; // キャンバス初期位置のY座標 
var dropArea; // ドロップエリア
var drawRect; // キャンバスの表示領域
var currentPotision; // キャンバス表示領域の現在位置
var glCanvas; // キャンバス
var layerManager; // レイヤー管理クラス
var effectTool; // エフェクトクラス
var gradationTool; // グラデーションクラス
var addtionalTool; // おまけツール
var adjustSliderTable1; // 調整スライダー1を表示するテーブル行
var adjustSliderLabel1; // 調整スライダー1のラベル
var adjustSlider1; // 調整スライダー1
var adjustSliderTable2; // 調整スライダー2を表示するテーブル行
var adjustSliderLabel2; // 調整スライダー2のラベル
var adjustSlider2; // 調整スライダー2
var toolSliderTable; // ツールスライダーを表示するテーブル行
var toolSliderLabel; // ツール用スライダーのラベル
var toolSlider; // ツール用汎用スライダー
var toolSliderTable2; // ツールスライダー2を表示するテーブル行
var toolSliderLabel2; // ツール用スライダー2のラベル
var toolSlider2; // ツール用汎用スライダー2
var seedSlider; // 母点スライダー
var knob; // カレントノブ
var knobs; // ノブ列
// UI初期化
function initUi() {
    // ドロップエリアとキャンバス表示領域
    dropArea = document.getElementById("dropArea");
    drawRect = document.getElementById("drawRect");
    // 調整スライダー1
    adjustSliderTable1 = document.getElementById("adjustSliderTable1");
    adjustSlider1 = document.getElementById("adjustSlider1");
    adjustSliderLabel1 = document.getElementById("adjustSliderLabel1");
    adjustSliderTable1.style.display = "none";
    // 調整スライダー2
    adjustSliderTable2 = document.getElementById("adjustSliderTable2");
    adjustSlider2 = document.getElementById("adjustSlider2");
    adjustSliderLabel2 = document.getElementById("adjustSliderLabel2");
    adjustSliderTable2.style.display = "none";
    // ツールスライダー
    toolSliderTable = document.getElementById("toolSliderTable");
    toolSlider = document.getElementById("toolSlider");
    toolSliderLabel = document.getElementById("toolSliderLabel");
    toolSliderTable.style.display = "none";
    // ツールスライダー2
    toolSliderTable2 = document.getElementById("toolSliderTable2");
    toolSlider2 = document.getElementById("toolSlider2");
    toolSliderLabel2 = document.getElementById("toolSliderLabel2");
    toolSliderTable2.style.display = "none";
    // 母点スライダー
    seedSlider = document.getElementById("seedSlider");
    // キャンバス初期位置の設定
    currentPotision = new Vector_1.Vector();
    currentPotision.setXY(CANVAS_INITIAL_POSITION_X, CANVAS_INITIAL_POSITION_Y);
    // ノブ列初期化
    knob = null;
    knobs = new Array();
}
initUi();
// アプリケーションを開始する
function main() {
    glCanvas = new GlCanvas_1.GlCanvas(CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT);
    layerManager = new LayerManager_1.LayerManager(glCanvas);
    effectTool = new EffectTool_1.EffectTool(glCanvas, layerManager);
    gradationTool = new GradationTool_1.GradationTool(glCanvas, layerManager);
    addtionalTool = new AdditionalTool_1.AdditionalTool(glCanvas, layerManager);
    layerManager.updateCanvas();
    addCanvasEventListener();
    setMatrix(glCanvas.getCanvas(), currentPotision);
}
main();
// ドラッグ中の要素がドロップ要素に重なった時
dropArea.addEventListener('dragover', function (event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    dropArea.classList.add('dragover');
});
// ドラッグ中の要素がドロップ要素から外れた時
dropArea.addEventListener('dragleave', function () {
    dropArea.classList.remove('dragover');
});
// ドロップ要素にドロップされた時
dropArea.addEventListener('drop', function (event) {
    event.preventDefault();
    dropArea.classList.remove('dragover');
    var drawer = new ImageDrawer_1.ImageDrawer();
    var imageFile = drawer.getImageFile(event.dataTransfer.files);
    var img = new Image();
    img.src = URL.createObjectURL(imageFile);
    img.onload = function () {
        glCanvas.setCanvasSize(img.width, img.height);
        drawer.draw(glCanvas.getGL(), img);
        layerManager.addLayer(drawer.getImageTexture());
    };
});
// 調整スライダー1
adjustSlider1.addEventListener("input", function () {
    effectTool.draw(this.value, adjustSlider2.value);
}, false);
// 調整スライダー2
adjustSlider2.addEventListener("input", function () {
    effectTool.draw(adjustSlider1.value, this.value);
}, false);
// ツールスライダー
toolSlider.addEventListener("input", function () {
    if (knob !== null) {
        var pos = knob.getCanvasPosition();
        effectTool.draw(this.value, toolSlider2.value, pos.getX(), pos.getY());
    }
    else {
        effectTool.draw(this.value, toolSlider2.value);
    }
}, false);
// ツールスライダー2
toolSlider2.addEventListener("input", function () {
    if (knob !== null) {
        var pos = knob.getCanvasPosition();
        effectTool.draw(toolSlider.value, this.value, pos.getX(), pos.getY());
    }
    else {
        effectTool.draw(toolSlider.value, this.value);
    }
}, false);
// 母点スライダー
seedSlider.addEventListener("input", function () {
    addtionalTool.draw(this.value);
}, false);
// 明るさ・コントラスト
document.getElementById("brightnessContrast").onclick = function () {
    addtionalTool.stopAnimation();
    setSlider(adjustSlider1, adjustSliderLabel1, adjustSliderTable1, -1.0, 1, 0.01, 0.0, "Brightness : ");
    setSlider(adjustSlider2, adjustSliderLabel2, adjustSliderTable2, -1.0, 1, 0.01, 0.0, "Contrast : ");
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    effectTool.setEffectType(EffectTool_1.EffectType.EffectTypeBrightnessContrast);
    effectTool.draw(adjustSlider1.value, adjustSlider2.value);
    removeKnob();
};
// 色相・彩度
document.getElementById("hueSarturation").onclick = function () {
    addtionalTool.stopAnimation();
    setSlider(adjustSlider1, adjustSliderLabel1, adjustSliderTable1, -1.0, 1, 0.01, 0.0, "Hue : ");
    setSlider(adjustSlider2, adjustSliderLabel2, adjustSliderTable2, -1.0, 1, 0.01, 0.0, "Sarturation : ");
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    effectTool.setEffectType(EffectTool_1.EffectType.EffectTypeHueSarturation);
    effectTool.draw(adjustSlider1.value, adjustSlider2.value);
    removeKnob();
};
// セピア
document.getElementById("sepia").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    effectTool.setEffectType(EffectTool_1.EffectType.EffectTypeSepia);
    effectTool.draw();
    removeKnob();
};
// グレースケール
document.getElementById("grayscale").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    effectTool.setEffectType(EffectTool_1.EffectType.EffectTypeGrayscale);
    effectTool.draw();
    removeKnob();
};
// 色反転
document.getElementById("invert").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    effectTool.setEffectType(EffectTool_1.EffectType.EffectTypeInvert);
    effectTool.draw();
    removeKnob();
};
// 2値化
document.getElementById("thresholding").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable2.style.display = "none";
    setSlider(toolSlider, toolSliderLabel, toolSliderTable, 0.1, 1, 0.01, 0.5, "Threshold : ");
    effectTool.setEffectType(EffectTool_1.EffectType.EffectTypeThreshold);
    effectTool.draw(toolSlider.value);
    removeKnob();
};
// すりガラス
document.getElementById("frostedGlass").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable2.style.display = "none";
    setSlider(toolSlider, toolSliderLabel, toolSliderTable, 1, 20, 0.1, 5, "Radius : ");
    effectTool.setEffectType(EffectTool_1.EffectType.EffectTypefrostedGlass);
    effectTool.draw(toolSlider.value);
    removeKnob();
};
// ポスタリゼーション
document.getElementById("posterization").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable2.style.display = "none";
    setSlider(toolSlider, toolSliderLabel, toolSliderTable, 2, 16, 1, 8, "Step : ");
    effectTool.setEffectType(EffectTool_1.EffectType.EffectTypePosterization);
    effectTool.draw(toolSlider.value);
    removeKnob();
};
// 白背景透明化
document.getElementById("transpalent").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable2.style.display = "none";
    setSlider(toolSlider, toolSliderLabel, toolSliderTable, 0.1, 1, 0.01, 0.5, "Threshold : ");
    effectTool.setEffectType(EffectTool_1.EffectType.EffectTypeTranspalent);
    effectTool.draw(toolSlider.value);
    removeKnob();
};
// ズームぼかし
document.getElementById("zoomBlur").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable2.style.display = "none";
    setSlider(toolSlider, toolSliderLabel, toolSliderTable, 0.1, 1, 0.01, 0.5, "Strength : ");
    effectTool.setEffectType(EffectTool_1.EffectType.EffectTypeZoomBlur);
    removeKnob(); // ノブを一度リセットする
    var addedknob = new Knob_1.Knob((knobs.length).toString());
    addedknob.addKnob(drawRect, dropArea);
    knobs.push(addedknob);
    knob = addedknob;
    setMatrix(knob.getElement(), knob.getGlobalPosition());
    var pos = knob.getCanvasPosition();
    effectTool.draw(toolSlider.value, 0, pos.x, pos.y);
};
// 六角形ピクセル化
document.getElementById("pixelate").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable2.style.display = "none";
    setSlider(toolSlider, toolSliderLabel, toolSliderTable, 1, 60, 1, 10, "Scale : ");
    effectTool.setEffectType(EffectTool_1.EffectType.EffectTypePixelate);
    removeKnob(); // ノブを一度リセットする
    var addedknob = new Knob_1.Knob((knobs.length).toString());
    addedknob.addKnob(drawRect, dropArea);
    knobs.push(addedknob);
    knob = addedknob;
    setMatrix(knob.getElement(), knob.getGlobalPosition());
    var pos = knob.getCanvasPosition();
    effectTool.draw(toolSlider.value, 0, pos.x, pos.y);
};
// 膨張フィルター
document.getElementById("expansion").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    setSlider(toolSlider, toolSliderLabel, toolSliderTable, 1, 200, 2, 20, "Radius : ");
    setSlider(toolSlider2, toolSliderLabel2, toolSliderTable2, -1.0, 1.0, 0.1, 1, "Strength : ");
    effectTool.setEffectType(EffectTool_1.EffectType.EffectTypeExpansion);
    removeKnob(); // ノブを一度リセットする
    var addedknob = new Knob_1.Knob((knobs.length).toString());
    addedknob.addKnob(drawRect, dropArea);
    knobs.push(addedknob);
    knob = addedknob;
    setMatrix(knob.getElement(), knob.getGlobalPosition());
    var pos = knob.getCanvasPosition();
    effectTool.draw(adjustSlider1.value, adjustSlider2.value, pos.x, pos.y);
};
// グラデーション
document.getElementById("blueRed").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    removeKnob();
    gradationTool.setGradationType(GradationTool_1.GradationType.GradationTypeBlueRed);
    gradationTool.draw();
};
document.getElementById("toyCamera").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    removeKnob();
    gradationTool.setGradationType(GradationTool_1.GradationType.GradationTypeToyCamera);
    gradationTool.draw();
};
document.getElementById("retro").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    removeKnob();
    gradationTool.setGradationType(GradationTool_1.GradationType.GradationTypeRetro);
    gradationTool.draw();
};
// おまけ機能(ボロノイアニメーション)
document.getElementById("voronoiAnimation").onclick = function () {
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    removeKnob();
    addtionalTool.setAdditionalType(AdditionalTool_1.AdditionalType.AdditionalTypeVoronoiAnimation);
    addtionalTool.draw(seedSlider.value);
};
// おまけ機能(距離マップアニメーション)
document.getElementById("distanceMapAnimation").onclick = function () {
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    removeKnob();
    addtionalTool.setAdditionalType(AdditionalTool_1.AdditionalType.AdditionalTypeDistanceMapAnimation);
    addtionalTool.draw(seedSlider.value);
};
// おまけ機能(ステンドグラス風)
document.getElementById("stainedGlass").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    removeKnob();
    addtionalTool.setAdditionalType(AdditionalTool_1.AdditionalType.AdditionalTypeStainedGlass);
    addtionalTool.draw(0);
};
// キャンバス保存
document.getElementById("savePng").onclick = function () {
    glCanvas.saveCanvas();
};
// キャンバス表示領域のマウスイベント
drawRect.addEventListener('wheel', function (event) {
    event.preventDefault();
    event = event;
    var del = new Vector_1.Vector();
    var x = event.deltaX;
    var y = event.deltaY;
    del.setXY(-x, -y);
    currentPotision.add(del);
    setMatrix(glCanvas.getCanvas(), currentPotision);
    if (knob !== null) {
        for (var i = 0; i < knobs.length; i++) {
            var pos = knobs[i].getGlobalPosition();
            pos.add(del);
            knobs[i].setGlobalPosition(pos);
            setMatrix(knobs[i].getElement(), pos);
        }
    }
}, false);
drawRect.addEventListener('mousemove', function (event) {
    if (knob === null) {
        return;
    }
    if (knob.getIsEnable() && !knob.getIsSelected()) { // つまみが選択状態ではないとき
        var pos = new Vector_1.Vector();
        var rect = this.getBoundingClientRect();
        pos.setXY(event.clientX - rect.left - knob.getElement().clientWidth / 2.0, event.clientY - rect.top - knob.getElement().clientHeight / 2.0);
        setMatrix(knob.getElement(), pos);
        knob.setGlobalPosition(pos);
    }
}, false);
// スライダーを設定する
function setSlider(slider, sliderLabel, sliderTable, min, max, step, value, label) {
    slider.min = min.toString();
    slider.max = max.toString();
    slider.step = step.toString();
    slider.value = value.toString();
    sliderLabel.textContent = label;
    sliderTable.style.display = "block";
}
// 行列を文字列で取得する
function getMatrixString(pos) {
    var matrix = gl_matrix_1.mat4.create();
    gl_matrix_1.mat4.identity(matrix);
    gl_matrix_1.mat4.translate(matrix, matrix, [pos.getX(), pos.getY(), -1.0]);
    var rad = 0;
    var axis = [0.0, 0.0, 1.0];
    gl_matrix_1.mat4.rotate(matrix, matrix, rad, axis);
    gl_matrix_1.mat4.scale(matrix, matrix, [1, 1, 1]);
    return matrix.toString();
}
// 行列を設定する
function setMatrix(element, pos) {
    var matrix = getMatrixString(pos);
    var matrixFunction = "matrix3d" + "(" + matrix + ")";
    element.style.transform = matrixFunction;
}
// エフェクトツールにキャンバス座標を伝える
function setCanvasCoordinateToEffectTool(pos) {
    if (effectTool.getEffectType() === EffectTool_1.EffectType.EffectTypeZoomBlur ||
        effectTool.getEffectType() === EffectTool_1.EffectType.EffectTypePixelate ||
        effectTool.getEffectType() === EffectTool_1.EffectType.EffectTypeExpansion) {
        effectTool.draw(toolSlider.value, toolSlider2.value, pos.getX(), pos.getY());
    }
}
// 位置からノブを探す
function findKnob(pos) {
    for (var i = 0; i < knobs.length; i++) {
        if (knobs[i].isCollusion(pos)) {
            return knobs[i];
        }
    }
    return null;
}
// ノブを取り除く
function removeKnob() {
    if (knob !== null) {
        for (var i = 0; i < knobs.length; i++) {
            knobs[i].getElement().remove();
        }
        knobs.length = 0;
        knob = null;
    }
}
// キャンバスにマウスイベントリスナーをつける
function addCanvasEventListener() {
    var canvas = glCanvas.getCanvas();
    canvas.addEventListener('mousedown', function (event) {
        if (knob === null) {
            return;
        }
        if (knob.getIsEnable()) {
            var pos = new Vector_1.Vector();
            if (knob.getIsSelected()) { // つまみが選択されているとき(置かれている)
                pos = knob.getCanvasPosition();
            }
            else {
                // つまみが選択されていないとき(移動中)
                pos = glCanvas.getCanvasCoordinate(event);
                knob.setCanvasPosition(pos);
            }
            knob.setIsSelected(!knob.getIsSelected());
            setCanvasCoordinateToEffectTool(pos);
        }
        // ノブを変更する
        var currentKnob = findKnob(glCanvas.getCanvasCoordinate(event));
        if (currentKnob !== knob && currentKnob !== null) {
            knob = currentKnob;
            if (knob.getIsSelected()) {
                knob.setIsSelected(false);
            }
        }
    }, false);
    canvas.addEventListener('mousemove', function (event) {
        if (knob === null) {
            return;
        }
        if (knob.getIsEnable() && !knob.getIsSelected()) {
            // つまみが選択されていないとき
            var coord = glCanvas.getCanvasCoordinate(event);
            var size = new Vector_1.Vector();
            size.setXY(-knob.getElement().clientWidth / 2.0, -knob.getElement().clientHeight / 2.0);
            coord.add(size);
            setCanvasCoordinateToEffectTool(coord);
        }
    }, false);
    canvas.addEventListener('mouseup', function (event) {
        if (knob === null) {
            return;
        }
        if (knob.getIsEnable() && !knob.getIsSelected()) {
            // つまみが選択されていないとき
            var coord = glCanvas.getCanvasCoordinate(event);
            setCanvasCoordinateToEffectTool(coord);
        }
    }, false);
}


/***/ })

/******/ });
//# sourceMappingURL=main.js.map