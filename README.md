# squid-generic-utils

Somewhere along the way, in every project we come across a need to create our own `utils.js` to serve the business codebase.

## Features

### `pushInPath(..)`

This function is designed to update a specific document in a Squid database collection. The function takes an object as an argument, which includes the following properties: `docRefName`, `docProp`, `valueToPush`, and `collectionName`.

Here's a step-by-step breakdown of what the function does:

1. The function begins by calling the `selectCollection` function with `collectionName` as an argument. This function is not shown in the provided code, but it presumably returns a reference to a Squid collection.

2. Next, it creates a document reference, `docRef`, by calling the `doc` method on the `portfolioCollection` object with `docRefName` as an argument. This reference points to a specific document within the Squid collection.

3. The function then retrieves the current state of the document by calling the `snapshot` method on `docRef` and awaits its result. The current state of the document is stored in the `current` variable.

4. A copy of the `current` object is made and stored in `tempDocProps`. This is done to avoid directly mutating the `current` object.

5. The function then checks if the property of the document specified by `docProp` is a string. If it is, the function updates the `docRefName` property of `tempDocProps` with `valueToPush` and then updates the document in Squid with the updated `tempDocProps` object.

6. If the `docProp` property of the document is an array, the function pushes `valueToPush` into this array, updates the `docProp` property of `tempDocProps` with the updated array, and then updates the document in Squid with the updated `tempDocProps` object.

7. Finally, the function logs the updated state of the document to the console.

This function is useful for updating specific properties of a document in a Squid collection, whether those properties are strings or arrays.

### `updateLocalStorageAndRead(..)`

 This function is designed to interact with both a Squid database collection and the browser's local storage. The function takes an object as an argument, which includes the following properties: `docRefName`, `collectionName`, and `refresh`.

Here's a step-by-step breakdown of what the function does:

1. The function begins by calling the `selectCollection` function with `collectionName` as an argument. This function is not shown in the provided code, but it presumably returns a reference to a Squid collection.

2. The function then checks if there is an item named "cacheResponse" in the local storage or if the `refresh` parameter is true. If either of these conditions is met, the function proceeds to the next steps. Otherwise, it skips to step 4.

3. The function creates a document reference, `docRef`, by calling the `doc` method on the `portfolioCollection` object with `docRefName` as an argument. This reference points to a specific document within the Squid collection. The function then retrieves the current state of the document by calling the `snapshot` method on `docRef` and awaits its result. The current state of the document is then stored in the local storage under the key "cacheResponse".

4. The function retrieves the "cacheResponse" item from the local storage and stores it in the `storedData` variable.

5. Finally, the function returns the parsed JSON of `storedData`.

This function is useful for caching Squid document data in the local storage and retrieving it. The `refresh` parameter allows for the cache to be updated with the latest data from Squid when needed.
