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

  set(which, cb) {
    this.keys[which] = cb;
  }

  changeSlide(key) {
    let action = this.keys[key.which];

    action && action();
  }
};
