module.exports = {
    "Pet": {
        "required": [
            "id",
            "name"
        ],
        "properties": {
            "id": {
                "type": "integer",
                "format": "int64"
            },
            "name": {
                "type": "string"
            },
            "tag": {
                "type": "string"
            }
        }
    }
}