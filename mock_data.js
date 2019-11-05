function mock_data() {
    var transaction_list = [
        {"transaction_id": "57423905", "description": "Noble Gas 194", "importer": "Vuipes", "exporter": "Great Wall Trading Co.", "amount": "102,597 USD", "posting_date": "2018-01-25"},
        {"transaction_id": "57423421", "description": "Noble Gas 28", "importer": "Vuipes", "exporter": "Great Wall Trading Co.", "amount": "643,435 USD", "posting_date": "2017-11-14"},
        {"transaction_id": "57423895", "description": "Hydraulics 74", "importer": "Great Wall Trading Co.", "exporter": "Wolf-Reiser", "amount": "840,639 USD", "posting_date": "2017-06-08"}
    ];

    var transaction_lc = [
        {"transaction_id": "57423905",
            "participants": {
                "issuer_bank": "HSBC",
                "advisory_bank": "CITI",
                "seller": "Exporter",
                "buyer": "Importer"
            },
            "identification": {
                "id": "E89MXDUQ9W0DMX",
                "lc_type": "Commercial",
                "expiry": "2021-11-28"
            },
            "value": {
                "amount": "102,597 USD"
            },
            "discharge_details": {
                "address": "8 Wu Kai Sha Road, NT",
                "city": "Hong Kong",
                "country": "China"
            },
            "product": {
                "description": "Noble Gas 194",
                "quantity": "424",
                "weight": "20",
                "unit_of_weight": "Tons",
                "unit_price": "241.97"
            },
            "presentation": {
                "country": "China",
                "province": "Shanghai",
                "city": "Shanghai",
                "last_ship_date": "2017-11-14",
                "period_presentation": "5 Months"
            },
            "upload_file": "file.pdf"
        }
    ];

    this.get_transaction_lc = function() {
        return transaction_lc;
    }
}

module.exports = mock_data;