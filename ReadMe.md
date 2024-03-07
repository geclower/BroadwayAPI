# Welcome to Broadway Bound API!

This is your one stop shop for shows that are currently playing on broadway!

## Endpoints:

`api/shows` - This will provide an array of objects of every play and musical currently playing on broadway.

`api/shows/closing` - This will return only the shows that has an annouced closing date.

`api/shows/musicals` - This will give an array of objects of only the musicals currently running.

`api/shows/nonmusicals` - This will give an array of objects of only the plays currently running.

`api/shows/*name of show*` - This will allow a singular search based on the title of the show. The formatting of this request is specific. The title does need to be capitalized. api/shows/Hamilton will work. api/shows/hamilton will not. If the show has multiple words in the title the formatting should be as follows: api/shows/The%20Lion%20King

The following is an example of the data set that each object provides:

 ```js {
    "_id": "65e895506b0e691f8fe6c89f",
    "title": "Hadestown",
    "runTime": 145,
    "theater": "Walter Kerr Theatre",
    "theaterAddress": "219 W 48th St",
    "directedBy": [
      "Rachel Chavkin"
    ],
    "bookBy": [
      "Anais Mitchell"
    ],
    "musicBy": [
      "Anais Mitchell"
    ],
    "openDate": "2019-04-17T00:00:00.000Z",
    "isClosing": false,
    "closeDate": null,
    "intermission": true,
    "isMusical": true,
    "buyTickets": "https://seatgeek.com/hadestown-tickets",
    "officialSite": "https://hadestown.com/",
    "posterImage": "https://imaging.broadway.com/images/poster-178275/w480/98790-15.jpg"
  }
  ```

The `"runTime"` is the number of minutes an average show is.

`"directedBy"`, `"bookBy"`, and `"musicBy"` are returned as an array of strings with potential for multiple strings.

`"openDate"` references the offical opening date and doesn't account for preview performances.

