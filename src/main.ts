import WebSocket from "ws";
// import { cloneDeep } from "lodash";
import lodash from "lodash";
import { log } from "console";

const { cloneDeep } = lodash;

import { factors } from "./factors.js";

interface Color {
  r: number;
  g: number;
  b: number;
  ww: number;
  cw: number;
}

const trans_flag_colors: Color[] = [
  // { r: 0, g: 0, b: 255, ww: 0, cw: 0 },
  // { r: 0, g: 255, b: 0, ww: 0, cw: 0 },
  // { r: 255, g: 0, b: 0, ww: 0, cw: 0 },
  { r: 91, g: 206, b: 250, ww: 0, cw: 0 },
  { r: 245, g: 169, b: 184, ww: 0, cw: 0 },
  { r: 0, g: 0, b: 0, ww: 0, cw: 255 },
];

interface Colors {
  ctx: string;
  data: {
    script: string;
    colourlist: Color[];
    fadeduration: number;
  };
}

const msg_base = {
  ctx: "action/ceilingscripts/activatescript",
  data: {
    script: "wave",
    colourlist: [
      trans_flag_colors[0],
      trans_flag_colors[1],
      trans_flag_colors[2],
    ],
    fadeduration: 100,
  },
};

function transform(colors: Colors) {
  let newColors = cloneDeep(colors);

  const fac = factors["ceiling1"];

  newColors.data.colourlist = colors.data.colourlist.map((color) => {
    return {
      r: color.r / fac.r_factor,
      g: color.g / fac.g_factor,
      b: color.b / fac.b_factor,
      ww: color.ww / fac.ww_factor,
      cw: color.cw / fac.cw_factor,
    };
  });

  newColors.data.colourlist = newColors.data.colourlist.map((color) => {
    const c_vec_len = Math.sqrt(
      color.r * color.r +
        color.g * color.g +
        color.b * color.b +
        color.ww * color.ww +
        color.cw * color.cw
    );

    return {
      r: Math.round((color.r / c_vec_len) * 1000),
      g: Math.round((color.g / c_vec_len) * 1000),
      b: Math.round((color.b / c_vec_len) * 1000),
      ww: Math.round((color.ww / c_vec_len) * 1000),
      cw: Math.round((color.cw / c_vec_len) * 1000),
    };
  });

  return newColors;
}

const sock = "ws://licht.realraum.at/sock";

function main(args: string[]): void {
  // Open websocket
  const ws = new WebSocket(sock);

  ws.onclose = () => {
    console.log("Disconnected from " + sock);
  };

  ws.onopen = () => {
    console.log("Connected to " + sock);

    const msg_transformed = transform(msg_base);

    const msg: string = JSON.stringify(msg_transformed);

    log(msg);

    ws.send(msg);

    // Close websocket

    ws.close();
  };

  // Receive message
  ws.onmessage = (event) => {
    // console.log("Message received: " + event.data);
  };
}

// System exit after 2 seconds

setTimeout(() => {
  process.exit(0);
}, 2000);

main(process.argv.slice(2));
