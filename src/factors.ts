const r3_led_factors_ = {
  _default_: {
    r_factor: 1,
    g_factor: 5, //green 5 times as bright as red
    b_factor: 10, //blue 2 times as bright as green
    ww_factor: 22, //yes warmwhite is about 22 times as bright as red
    cw_factor: 18,
  },
  flooddoor: {
    r_factor: 4,
    g_factor: 4,
    b_factor: 4,
    ww_factor: 12,
    cw_factor: 12,
  },
  ceiling1: {
    r_factor: 1,
    g_factor: 5, //green 5 times as bright as red
    b_factor: 10, //blue 2 times as bright as green
    ww_factor: 22, //yes warmwhite is about 22 times as bright as red
    cw_factor: 18,
  },
  ceiling2: {
    r_factor: 1,
    g_factor: 5, //green 5 times as bright as red
    b_factor: 10, //blue 2 times as bright as green
    ww_factor: 22, //yes warmwhite is about 22 times as bright as red
    cw_factor: 18,
  },
  ceiling3: {
    r_factor: 1,
    g_factor: 5, //green 5 times as bright as red
    b_factor: 10, //blue 2 times as bright as green
    ww_factor: 22, //yes warmwhite is about 22 times as bright as red
    cw_factor: 18,
  },
  ceiling4: {
    r_factor: 1,
    g_factor: 5, //green 5 times as bright as red
    b_factor: 10, //blue 2 times as bright as green
    ww_factor: 22, //yes warmwhite is about 22 times as bright as red
    cw_factor: 18,
  },
  ceiling5: {
    r_factor: 1,
    g_factor: 5, //green 5 times as bright as red
    b_factor: 10, //blue 2 times as bright as green
    ww_factor: 22, //yes warmwhite is about 22 times as bright as red
    cw_factor: 18,
  },
  ceiling6: {
    r_factor: 1,
    g_factor: 5, //green 5 times as bright as red
    b_factor: 10, //blue 2 times as bright as green
    ww_factor: 22, //yes warmwhite is about 22 times as bright as red
    cw_factor: 18,
  },
  abwasch: {
    r_factor: 4,
    g_factor: 4,
    b_factor: 4,
    ww_factor: 12,
    cw_factor: 12,
  },
  funkbude: {
    r_factor: 4,
    g_factor: 4,
    b_factor: 4,
    ww_factor: 12,
    cw_factor: 12,
  },
};

interface r3_led_factors {
  r_factor: number;
  g_factor: number;
  b_factor: number;
  ww_factor: number;
  cw_factor: number;
}

function getr3ledfactors(name: keyof typeof r3_led_factors_) {
  console.log(name);
  if (r3_led_factors_[name]) return r3_led_factors_[name];
  else return r3_led_factors_["_default_"];
}

export { r3_led_factors_ as factors, getr3ledfactors, r3_led_factors };
