module.exports = class ArrowChanger{
  constructor($core) {
    this.name = 'arrow-changer';
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
