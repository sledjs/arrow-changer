module.exports = class Keys{
  constructor($core) {
    let slides = $core.module('slides');
    this.name = 'keys';

    this.keys = {
      37: slides.prev,
      39: slides.next,
    };

    document.addEventListener('keydown', key =>
      this.changeSlide.call(this, key));
  }

  changeSlide(key) {
    this.keys[key.which]();
  }
};
