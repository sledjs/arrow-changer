module.exports = class Keys{
  constructor($core) {
    this.name = 'keys';
    this.slides = $core.module('slides');

    document.addEventListener('keydown', key =>
      this.changeSlide.call(this, key));
  }

  changeSlide(key) {
    switch (key.which) {
      case 37:
        this.slides.prev();
        break;
      case 39:
        this.slides.next();
        break;
    }
  }
};
