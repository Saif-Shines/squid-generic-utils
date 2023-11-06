import { Squid } from "@squidcloud/client";

const squid = new Squid({
  ...SquidOptions, // wip
});

async function pushInPath({
  docRefName,
  docProp,
  valueToPush,
  collectionName,
}) {
  let portfolioCollection = squid.collection(collectionName);
  let docRef = portfolioCollection.doc(docRefName);
  let current = await docRef.snapshot();
  var tempDocProps = { ...current };

  if (typeof current[docProp] === "string") {
    tempDocProps[docRefName] = valueToPush;
    await docRef.update(tempDocProps);
  }

  if (Array.isArray(current[docProp])) {
    let temp = tempDocProps[String(docProp)];
    temp.push(valueToPush);
    tempDocProps[String(docProp)] = temp;
    await docRef.update(tempDocProps);
  }

  console.info("[After]", await docRef.snapshot());
}

function updateLocalStorageAndRead({ docRefName, collectionName, refresh }) {
  let portfolioCollection = selectCollection(collectionName);
  if (!localStorage.getItem("cacheResponse") || refresh) {
    let docRef = portfolioCollection.doc(docRefName);
    let current = await docRef.snapshot();
    localStorage.setItem("cacheResponse", JSON.stringify(current));
  }
  let storedData = localStorage.getItem("cacheResponse");
  return JSON.parse(storedData);
}
