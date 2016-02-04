export default class ArrowChanger{
  constructor($core) {
    document.onkeydown = _=> {
      if (_.which == 37 || _.which == 39) {
        switch (_.which) {
          case 37:
            $core.modules.slides.change(-1);
            break;
          case 39:
            $core.modules.slides.change(1);
            break;
        }

        $core.module('auto-slider')
          .then(module =>
            module._.restart(5000)
          ).catch(_ => {});
      }
    };
  }
}
