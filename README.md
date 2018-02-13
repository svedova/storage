This package provides wrapper classes for storage APIs like `localStorage` and `sessionStorage`.

## Installation

```
npm i @svedova/storage --save
```

## Usage 

```
import { LocalStorage } from "@svedova/storage"

LocalStorage.set("my-key", 10);
LocalStorage.get("my-key"); // 10
LocalStorage.get("my-key-2", "default-value"); // default-value
LocalStorage.del("my-key"); // Deletes key entry for my-key
LocalStorage.clear(); // Clears the local storage
```
