var paths =
  '<path d="M6.8 10a3.2 3.2 0 1 0 6.401 0A3.2 3.2 0 0 0 6.8 10zM4.529 8.8a5.6 5.6 0 0 1 9.43-2.76 1.2 1.2 0 1 0 1.697-1.697A8.002 8.002 0 0 0 2.367 7.601H0V10h3.199c.999 0 1.245-.813 1.33-1.2zM16.8 10c-.999 0-1.245.814-1.329 1.199a5.6 5.6 0 0 1-9.43 2.759 1.2 1.2 0 0 0-1.698 1.697A7.972 7.972 0 0 0 10 18a8.005 8.005 0 0 0 7.633-5.6H20V10h-3.2z"></path>';
export default {
  icon: "shareable",
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
    head += ' id="entypo-icon-shareable"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "shareable";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
