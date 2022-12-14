# Countries API

Welcome to version 1.0 of The Country API. Below you will find all available methods to our Country API.
## live demo: https://country-api-production.up.railway.app/

### Access all Countries

The following will access [all countries](https://simple.wikipedia.org/wiki/List_of_countries)

```
https://country-api-production.up.railway.app/countries
```

---

### Access by Country

The following will access the country Mexico.
<br>

#### <span style="color:orange">note</span>

- Country is case sensitive.
  <br>
- For Countries with spaces use
  [Percent Encoding](https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding) (ex. United%20States.)

```
https://country-api-production.up.railway.app/countries/name/Mexico
```

---

### Access all Continent

The following code will return any country in the [continent](https://en.wikipedia.org/wiki/Continent) Asia.

```
https://country-api-production.up.railway.app/countries/continent/Asia
```

---

## Sources

- [rest countries API](https://restcountries.com/)
- [CSS box shadow](https://getcssscan.com/css-box-shadow-example)
- [Express](https://expressjs.com/en/api.html)
- [Mongoose](https://mongoosejs.com/docs/documents.html)
