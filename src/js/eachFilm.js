import React from 'react';
import dataFilms from '../data/FilmsData.js';

function eachFilm({match}) {

    for (var i = 0; i < dataFilms.length; i++) {
      if(dataFilms[i].id == match.params.id){
        var filmObj = dataFilms[i]
      }
    }


    return (
      filmObj?
        <div className="field">
          <p>Название фильма:</p>
            <h2>
              <p>{filmObj.name}</p>
            </h2>
            <hr/>
          <p>Фильм вышел в {filmObj.yers} году</p>
          <p>Описание: {filmObj.info}</p>
        </div>
        :
          <div className="field">У фильма пока нет описания</div>
    )
}

export default eachFilm;
