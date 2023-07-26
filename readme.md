# CRUD

## add-post.js

1. newPostObj.tags - turi buti masyvas
2. nesekmes atveju i html irasyti klaida su raudonu stilium ir klaidos teksu. isbandyti ar veikia
3.

## index.html

1. prideti kiek yra reactions i kieviena kortele su reiksme
2. sutrumpinti title teksta iki 15 simboliu
3. atvaizuodti ne 10 o 20 korteliu
4. sukurti mygtuka 'sortById z-a' kuris isrikiuotu korteles pagal id mazejancia tvarka

## shop.html (kas nepasidareti is vakar)

url https://dummyjson.com/products

1. tik uzsikrvus psl, su funkcija parsiusi prekes
2. reikalingi laukai:

```json
{
  "id": 1,
  "title": "iPhone 9",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "..."
}
```

3. sugeneruoti jas kaip parduotuves prekes (3 per ploti)

3.1. atvaizduoti kortelese tik nuotruka (thumbnail) title ir price

4. prideti nuoroda su tekstu "daugiau";

   4.1 nuododa veda i single-item.html su url parametru "id"

## create-item.html

1. sukurti forma kuri leidzia supildyti title, price, brand, category, thumbnail,
2. pateikiant forma surinkti input reiksmes
3. siusti su fetch post metodu i https://dummyjson.com/products/add
4. atvaizduoti skirtingus konsole logus sekmes ir nesekmes atveju
5. sekmes atveju nunaviguoti i shop.html
