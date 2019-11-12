function mock_data() {
    var transaction_list = [
        {"transaction_id": "57423905", "status": "Closed", "description": "Noble Gas 194", "importer": "Vuipes", "exporter": "Great Wall Trading Co.", "amount": "102,597 USD", "posting_date": "2018-01-25"},
        {"transaction_id": "57423421", "status": "Closed", "description": "Noble Gas 28", "importer": "Vuipes", "exporter": "Great Wall Trading Co.", "amount": "643,435 USD", "posting_date": "2017-11-14"},
        {"transaction_id": "57423895", "status": "Closed", "description": "Hydraulics 74", "importer": "Great Wall Trading Co.", "exporter": "Wolf-Reiser", "amount": "840,639 USD", "posting_date": "2017-06-08"}
    ];

    var transaction_lc = [
        {
            "transaction_id": "57423905",

            // Participants
            "issuer_bank": "HSBC",
            "advisory_bank": "CITI",
            "seller": "Exporter",
            "buyer": "Importer",

            // Identification
            "id": "E89MXDUQ9W0DMX",
            "lc_type": "Commercial",
            "expiry": "2021-11-28",

            // Value
            "amount": "102,597 USD",

            // Discharge Details
            "address": "8 Wu Kai Sha Road, NT",
            "city": "Hong Kong",
            "country": "China",

            // Product
            "description": "Noble Gas 194",
            "quantity": "424",
            "weight": "20",
            "unit_of_weight": "Tons",
            "unit_price": "241.97",

            // Presentation
            "country": "China",
            "province": "Shanghai",
            "city": "Shanghai",
            "last_ship_date": "2017-11-14",
            "period_presentation": "5 Months"
        },
        {
            "transaction_id": "57423421",

            // Participants
            "issuer_bank": "HSBC",
            "advisory_bank": "ICBC Asia",
            "seller": "Exporter",
            "buyer": "Importer",

            // Identification
            "id": "E89MXDUQ9W0DMX",
            "lc_type": "Commercial",
            "expiry": "2021-11-28",

            // Value
            "amount": "102,597 USD",

            // Discharge Details
            "address": "8 Wu Kai Sha Road, NT",
            "city": "Hong Kong",
            "country": "China",

            // Product
            "description": "Noble Gas 194",
            "quantity": "424",
            "weight": "20",
            "unit_of_weight": "Tons",
            "unit_price": "241.97",

            // Presentation
            "country": "China",
            "province": "Shanghai",
            "city": "Shanghai",
            "last_ship_date": "2017-11-14",
            "period_presentation": "5 Months"
        },
        {
            "transaction_id": "57423895",

            // Participants
            "issuer_bank": "HSBC",
            "advisory_bank": "BoC International",
            "seller": "Exporter",
            "buyer": "Importer",

            // Identification
            "id": "E89MXDUQ9W0DMX",
            "lc_type": "Commercial",
            "expiry": "2021-11-28",

            // Value
            "amount": "102,597 USD",

            // Discharge Details
            "address": "8 Wu Kai Sha Road, NT",
            "city": "Hong Kong",
            "country": "China",

            // Product
            "description": "Noble Gas 194",
            "quantity": "424",
            "weight": "20",
            "unit_of_weight": "Tons",
            "unit_price": "241.97",

            // Presentation
            "country": "China",
            "province": "Shanghai",
            "city": "Shanghai",
            "last_ship_date": "2017-11-14",
            "period_presentation": "5 Months"
        },
    ];

    this.get_transaction_list = function() {
        return transaction_list;
    }

    this.push_to_transaction_list = function(item) {
        transaction_list.push(item);
    }

    this.get_transaction_lc = function(transaction_id) {
        var found = false;
        for(var i = 0; i < transaction_lc.length; i++ ) {
            lc = transaction_lc[i];
            if(lc.transaction_id === transaction_id){
                return lc;
                found = true;
                break;
            }
        }
        if(found===false){
            var emptyLC = {
                "transaction_id": "",
                "issuer_bank": "",
                "advisory_bank": "",
                "seller": "",
                "buyer": "",
                "id": "",
                "lc_type": "",
                "expiry": "",
                "amount": "",
                "address": "",
                "city": "",
                "country": "",
                "description": "",
                "quantity": "",
                "weight": "",
                "unit_of_weight": "",
                "nit_price": "",
                "country": "",
                "province": "",
                "city": "",
                "ast_ship_date": "",
                "period_presentation": "",
            };
            return emptyLC;
        }
    }

    this.add_transaction_lc = function(lc) {
        var new_lv = {
            "transaction_id": lc.transaction_id,
            "issuer_bank": lc.issuer_bank,
            "advisory_bank": lc.advisory_bank,
            "seller": lc.seller,
            "buyer": lc.buyer,
            "id": lc.id,
            "lc_type": lc.lc_type,
            "expiry": lc.expiry,
            "amount": lc.amount,
            "address": lc.address,
            "city": lc.city,
            "country": lc.country,
            "description": lc.description,
            "quantity": lc.quantity,
            "weight": lc.weight,
            "unit_of_weight": lc.unit_of_weight,
            "nit_price": lc.nit_price,
            "country": lc.country,
            "province": lc.province,
            "city": lc.city,
            "ast_ship_date": lc.ast_ship_date,
            "period_presentation": lc.period_presentation,
        }
        transaction_lc.push(lc);
        return transaction_lc;
    }
}

module.exports = mock_data;