var paths =
  '<path d="M18.752 16.038c-.097.266-.822 1.002-6.029-.878l-5.105-1.843C5.841 12.676 3.34 11.668 2.36 11.1c-.686-.397-.836-1.282-.836-1.282s-.163-2.956-.263-3.684c-.1-.728.095-.853.796-.492.436.225 1.865 2.562 2.464 3.567 1.512.381 2.862.761 3.493.949-.257-1.717-.74-4.928-.913-5.933-.166-.963.55-.535.55-.535.331.19.983.661 1.206 1.002 1.522 2.326 3.672 6.6 3.836 6.928.896.28 2.277.733 3.102 1.03 2.156.779 3.087 3.034 2.957 3.388z"></path>';
export default {
  icon: "aircraft-landing",
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
    head += ' id="entypo-icon-aircraft-landing"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "aircraft-landing";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
