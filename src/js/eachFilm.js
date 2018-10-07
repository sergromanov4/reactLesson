import React from 'react';
import dataFilms from '../data/FilmsData.js';

function eachFilm({match}) {

    for (var i = 0; i < dataFilms.length; i++) {
      if(dataFilms[i].id == match.params.id){
        var x = dataFilms[i]
      }
    }

    return (
        <div className="field">
          <h2>Название фильма:
              <p>{x.name}</p>
          </h2>
          <p>Фильм вышел в {x.yers} году</p>
          <p>Описание: {x.info}</p>
        </div>
    )
}

export default eachFilm;
