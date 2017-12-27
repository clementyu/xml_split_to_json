# xml_split_to_json
A sample to split large xml file and encode the split xml array

## Prerequisites
- Node JS 4 or above
- `xmlsplit`
  - visit https://github.com/remuslazar/node-xmlsplit 
  - download the folder `/lib/` 
- `xml2js`

```
  $ npm install xml2js 
```

## Usage

### XML-Splitter 

- To split a large XML file into smaller one: 

```
  $ node xmlsplitter.js /your/path/to/the/large.xml <xml-tag-of-the-array> <batch-size>
```

for instance, To split a large XML array composed by elements with tag <the-array-member> in an XML file `/home/user/the_array.xml` into small pieces. For each piece, there are 500 elements: 

```
  $ node xmlsplitter.js /home/user/the_array.xml the-array-member 500
```

### XML to JSON

```
  $ node xml_to_json.js <xml-file>
```

For instance, to encode `foo.xml`, just do

```
  $ node xml_to_json.js foo.xml
```

and then a file `foo.json` will be saved in the same folder. 