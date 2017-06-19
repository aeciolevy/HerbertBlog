import Youtube from 'youtube-node';


const API_KEY = 'AIzaSyAmCC2BZKHiaFZFt8vsLTQkn-TlLMOCaNo';
export const FETCH_VIDEO = 'FETCH_VIDEO';

export function fetchVideoInfo (id) {

  let promise = new Promise( (resolve, reject) => {
    let youTube = new Youtube();
    youTube.setKey(API_KEY);
    youTube.getById(id, (error, video) => {
      if (error) {
        reject(error);
      }
      else {
        resolve(video.items[0])
      }
    });
  })


  return {
    type: FETCH_VIDEO,
    payload: promise
  }
}