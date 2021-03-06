var paths =
  '<path d="M16.4 4a2.4 2.4 0 1 0-4.8 0c0 .961.568 1.784 1.384 2.167-.082 1.584-1.27 2.122-3.335 2.896-.87.327-1.829.689-2.649 1.234V6.176A2.396 2.396 0 0 0 6 1.6a2.397 2.397 0 1 0-1 4.576v7.649A2.393 2.393 0 0 0 3.6 16a2.4 2.4 0 1 0 4.8 0c0-.961-.568-1.784-1.384-2.167.082-1.583 1.271-2.122 3.335-2.896 2.03-.762 4.541-1.711 4.64-4.756A2.398 2.398 0 0 0 16.4 4zM6 2.615a1.384 1.384 0 1 1 0 2.768 1.384 1.384 0 0 1 0-2.768zm0 14.77a1.385 1.385 0 1 1 0-2.77 1.385 1.385 0 0 1 0 2.77zm8-12a1.385 1.385 0 1 1 0-2.77 1.385 1.385 0 0 1 0 2.77z"></path>';
export default {
  icon: "flow-branch",
  paths: paths,
  getSvg: function() {
    var head = '<svg xmlns="http://www.w3.org/2000/svg"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</svg>";
    return head + paths + tail;
  },
  getSprite: function() {
    var head = '<svg xmlns="http://www.w3.org/2000/svg">';
    head += "<symbol";
    head += ' id="entypo-icon-flow-branch"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "flow-branch";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
