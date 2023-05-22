import HTTPWrapper from "../HTTPWrapper/HTTPWrapper"

class FrameUtils {
  async createFrame(name, width, height, content, header) {
    const wrapper = new HTTPWrapper('POST', 'frames', {
      frame: {
        name,
        width,
        height,
        content,
        header
      }
    });

    const res = wrapper.perform();

    if (res.status === 200) {
      return res;
   } else {
     return {message: "That didn't work."}
   }
  }
}

export default new FrameUtils();
