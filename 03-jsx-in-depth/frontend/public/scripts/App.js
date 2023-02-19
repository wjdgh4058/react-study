function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);
  var _super = _createSuper(App);
  function App() {
    var _this;
    _classCallCheck(this, App);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      headline: "React Application",
      // isDisabled: false,
      isToggle: false,
      isLoading: !true,
      hasError: null // { message: '서버에서 적절하지 않은 요청이 있었다는 응답이 있었습니다.' },
    });
    _defineProperty(_assertThisInitialized(_this), "originalHeadline", _this.state.headline);
    _defineProperty(_assertThisInitialized(_this), "willUpdateHeadline", "NEW HEADLINE! 😃");
    _defineProperty(_assertThisInitialized(_this), "handleChangeHeadline", function () {
      // 조건 처리
      // 문을 사용할 것인가?
      if (_this.state.isToggle) {
        _this.setState({
          isToggle: false,
          headline: _this.originalHeadline
        });
      } else {
        _this.setState({
          isToggle: true,
          headline: _this.willUpdateHeadline
        });
      }

      // 아니면 식을 사용할 것인가?

      // this.setState({
      //   headline: 'NEW HEADLINE! 😃',
      //   isDisabled: true,
      // });
    });
    return _this;
  }
  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
        isToggle = _this$state.isToggle,
        headline = _this$state.headline;
      if (this.state.isLoading) {
        return /*#__PURE__*/React.createElement("div", {
          role: "alert"
        }, "\uB370\uC774\uD130 \uB85C\uB529 \uC911...");
      }
      if (this.state.hasError) {
        return /*#__PURE__*/React.createElement("div", {
          role: "alert"
        }, this.state.hasError.message);
      }

      // `style` prop object!!!!!!!!
      var hiddenStyle = {
        display: "none"
      };
      return /*#__PURE__*/React.createElement("div", {
        "data-component": "App"
      }, /*#__PURE__*/React.createElement("h1", {
        style: hiddenStyle
      }, headline), /*#__PURE__*/React.createElement("button", {
        // disabled={this.state.isDisabled}
        type: "button",
        onClick: this.handleChangeHeadline
      }, isToggle ? "오리지널 헤드라인으로 변경" : "뉴 헤드라인으로 변경"));
    }
  }]);
  return App;
}(React.Component);
export default App;