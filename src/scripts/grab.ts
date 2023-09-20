import axios from "axios";

const instance = axios.create();

instance.interceptors.response.use(
  function (response) {
    if (response.status === 200) {
      return response;
    } else {
      return Promise.reject({
        code: response.status,
        message: response.statusText,
      });
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);



type assetsType = "loot" | "summoner-emotes" | "summoner-icon-sets" | "summoner-icons" | "ward-skin-sets" | "ward-skins";
type langType = "chinese" | "english";
let langMap = new Map([
  ["chinese", "zh_cn"],
  ["english", "default"]
]);

class Grab {
  public lang: langType;

  constructor(lang: langType) {
    this.lang = lang;
  }

  get(assets: assetsType, lang = this.lang) {
    switch (assets) {
      case "loot":
        break;
      case "summoner-emotes":
        break;
      case "summoner-icon-sets":
        break;
      case "summoner-icons":
        return instance.get(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/summoner-icons.json`);
      case "ward-skin-sets":
        break;
      case "ward-skins":
        break;
    }

    throw new Error("Not implemented");
  }
}

export default Grab;
