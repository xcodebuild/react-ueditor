"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ueditor = _interopRequireDefault(require("./ueditor/ueditor.all"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Editor extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.initEditor();
  }

  componentWillUnmount() {
    // 组件卸载后，清除放入库的id
    _ueditor.default.delEditor(this.props.id);
  }

  initEditor() {
    const {
      id,
      config
    } = this.props;

    const ueEditor = _ueditor.default.getEditor(this.props.id, config);

    const self = this;
    ueEditor.ready(ueditor => {
      if (!ueditor) {
        _ueditor.default.delEditor(id);

        self.initEditor();
      }
    });
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      id: this.props.id,
      name: "content",
      type: "text/plain"
    });
  }

}

var _default = Editor;
exports.default = _default;