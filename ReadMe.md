# Welcome to Broadway Bound API!

This is your one stop shop for shows that are currently playing on broadway!

## Get Requests:

`api/shows` - This will provide an array of objects of every play and musical currently running on broadway.

`api/shows/closing` - This will return only the shows that have an annouced closing date.

`api/shows/musicals` - This will give an array of objects of only the musicals currently running.

`api/shows/nonmusicals` - This will give an array of objects of only the plays currently running.

`api/shows/:name` - This will allow a singular search based on the title of the show. 

- The formatting of this request is specific. **The title needs to be capitalized.**  `api/shows/Hamilton` will work. `api/shows/hamilton` will not. 

- If the show has multiple words in the title the formatting should be as follows: `api/shows/The%20Lion%20King`. 
    
- If the show has punctuation in the title just use it as normal. The formatting is: `api/shows/Moulin%20Rouge!` or `api/shows/&%20Juliet`.

The following is an example of the data set that each object provides:

 ```js 
 {
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

## Adding a Show

When a new show opens and you need to add another data set use the following outline using the endpoint `api/shows`:

```js
{
  "title": String,
  "runTime": Number,
  "theater": String,
  "theaterAddress": String,
  "directedBy": Array,
  "bookBy": Array,
  "musicBy": { 
    type: Array,
    require: false},
  "openDate": Date,
  "isClosing": Boolean,
  "closeDate": {
    type: Date,
    require: false},
  "intermission": Boolean,
  "isMusical": Boolean,
  "buyTickets": String,
  "officialSite": String,
  "posterImage": String
}

```
For the `runTime` use the total amount of minutes.

For the `theaterAddress` use the following format: "235 W 44th St"

`directedBy`, `bookBy`, and `musicBy` should be formatted as an array of strings. If the is no music in the show, leave the array blank.

`openDate` should be the offical opening and not include any previews or out of town runs.

The format for `openDate` and `closeDate` should match the following: "yyyy-mm-dd"

If the closing date hasn't been announced leave the value as `""`.

`buyTickets`, `officialSite`, and `posterImage` are all links in the format of a String.

## Updating a Show

A show's info may need to be updated if a closing date is announced.

There are two ways to update a show: by ID or by name.

If using the ID, use the following format for your Update Request: `api/shows/id`

If using the title, use the following format: `api/shows/name`

- **The title needs to be capitalized.**  `api/shows/Hamilton` will work. `api/shows/hamilton` will not. 

- If the show has multiple words in the title the formatting should be as follows: `api/shows/The%20Lion%20King`. 

- If the show has punctuation in the title just use it as normal. The formatting is: `api/shows/Moulin%20Rouge!` or `api/shows/&%20Juliet`.


## Deleting a Show

Once a show has closed it will need to beremoved from the data.

There are two ways to delete a show: by ID or by name.

If using the ID, use the following format for your Delete Request: `api/shows/id`

If using the title, use the following format: `api/shows/name`

- **The title needs to be capitalized.**  `api/shows/Hamilton` will work. `api/shows/hamilton` will not. 

- If the show has multiple words in the title the formatting should be as follows: `api/shows/The%20Lion%20King`. 

- If the show has punctuation in the title just use it as normal. The formatting is: `api/shows/Moulin%20Rouge!` or `api/shows/&%20Juliet`.

__________________________________

See you at the show!

![Gif of two actors bowing](https://i.gifer.com/7Qt7.gif)

![a performer in front of a crowd](https://t3.ftcdn.net/jpg/01/64/66/74/360_F_164667494_g0a8Z5gKmCWmisKMzrgsybK5VAiiukwQ.jpg)

![fred astaire bowing](https://media2.giphy.com/media/3orif3j4dRfClbz18k/giphy.gif?cid=6c09b952n5kh4ze3i41fw00vv9otazlohp5n1lzelsfwdl0p&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g)