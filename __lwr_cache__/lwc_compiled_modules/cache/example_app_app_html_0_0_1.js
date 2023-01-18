import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="calculator${0}"${2}><div class="results-display${0}"${2}>0</div><div class="whole-numbers${0}"${2}><button class="btn btn-primary${0}"${2}>C</button><button class="btn btn-primary${0}"${2}>+/-</button><button class="btn btn-primary${0}"${2}>1</button><button class="btn btn-primary${0}"${2}>2</button><button class="btn btn-primary${0}"${2}>3</button><button class="btn btn-primary${0}"${2}>4</button><button class="btn btn-primary${0}"${2}>5</button><button class="btn btn-primary${0}"${2}>6</button><button class="btn btn-primary${0}"${2}>7</button><button class="btn btn-primary${0}"${2}>8</button><button class="btn btn-primary${0}"${2}>9</button><button class="btn btn-primary${0}"${2}>0</button></div><div class="numerator${0}"${2}><button class="btn btn-primary${0}"${2}>1</button><button class="btn btn-primary${0}"${2}>2</button><button class="btn btn-primary${0}"${2}>3</button><button class="btn btn-primary${0}"${2}>4</button><button class="btn btn-primary${0}"${2}>5</button><button class="btn btn-primary${0}"${2}>6</button><button class="btn btn-primary${0}"${2}>7</button><button class="btn btn-primary${0}"${2}>8</button><button class="btn btn-primary${0}"${2}>9</button><button class="btn btn-primary${0}"${2}>0</button><button class="btn btn-primary${0}"${2}>Delete</button></div><div class="denominator${0}"${2}><button class="btn btn-primary${0}"${2}>1</button><button class="btn btn-primary${0}"${2}>2</button><button class="btn btn-primary${0}"${2}>3</button><button class="btn btn-primary${0}"${2}>4</button><button class="btn btn-primary${0}"${2}>5</button><button class="btn btn-primary${0}"${2}>6</button><button class="btn btn-primary${0}"${2}>7</button><button class="btn btn-primary${0}"${2}>8</button><button class="btn btn-primary${0}"${2}>9</button><button class="btn btn-primary${0}"${2}>0</button><button class="btn btn-primary${0}"${2}>Delete</button></div><div class="operators${0}"${2}><button class="btn btn-primary${0}"${2}>+</button><button class="btn btn-primary${0}"${2}>-</button><button class="btn btn-primary${0}"${2}>x</button><button class="btn btn-primary${0}"${2}>/</button><button class="btn btn-primary${0}"${2}>=</button></div></div>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1(), 1)];
  /*LWC compiler v2.17.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "example-app_app"
}
freezeTemplate(tmpl);
