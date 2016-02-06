class Keys {
  init(core) {
    let slides = core.module('slides');

    this.keys = {
      37: slides.prev,
      39: slides.next,
    };

    document.addEventListener('keydown', key =>
      this.press.call(this, key));
  }

  set(key, action) {
    this.keys[key] = action;
  }

  press(key) {
    let action = this.keys[key.which];

    action && action();
  }
};

export default Keys;
