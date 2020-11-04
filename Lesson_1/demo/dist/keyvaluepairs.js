class KeyValuePair {
    setKeyValue(key, value) {
        this.key = key;
        this.val = value;
    }
    display() {
        console.log(`key = ${this.key}, value = ${this.val}`);
    }
}
let kvp = new KeyValuePair();
kvp.setKeyValue(1, "Steve");
kvp.display();
//# sourceMappingURL=keyvaluepairs.js.map