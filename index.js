export default class ArrowChanger{
  constructor($core) {
    let slides = $core.getModule('slides', '_');

    document.addEventListener('keydown', key => {
      switch (key.which) {
        case 37:
          slides.change(-1);
          break;
        case 39:
          slides.change(1);
          break;
      }
    });
  }
}
