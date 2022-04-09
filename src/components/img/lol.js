let statelist = [
    {
        state: "Andaman and Nicobar Islands",
        lat: 12.6,
        long: 92.8,
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Seal_of_Andaman_and_Nicobar_Islands.png/92px-Seal_of_Andaman_and_Nicobar_Islands.png",
        population: 380581,
        capital: "Port Blair",
        language: "Bengali,Hindi",
    },
    {
        state: "Andhra Pradesh",
        lat: 15,
        long: 79.5,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Emblem_of_Andhra_Pradesh.svg/100px-Emblem_of_Andhra_Pradesh.svg.png",
        population:49577103,
        capital: "Amaravati",
        language: "Telugu,Urdu",
    },
    {
        state: "Arunachal Pradesh",
        lat: 28.4,
        long: 94.5,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/..Arunachal_Pradesh_Flag%28INDIA%29.png/100px-..Arunachal_Pradesh_Flag%28INDIA%29.png",
        population:1383727,
        capital: "Itanagar",
        language: "Nishi,Adi",
    },
    {
        state: "Assam",
        lat: 26,
        long: 92.8,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Seal_of_Assam.png/100px-Seal_of_Assam.png",
        population:31205576,
        capital: "Dispur",
        language: "Assamese,Bengali",
    },
    {
        state: "Bihar",
        lat: 25.8,
        long: 85.7,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Seal_of_Bihar.svg/100px-Seal_of_Bihar.svg.png",
        population:104099452,
        capital: "Patna",
        language: "Hindi,Maithili",
    },
    {
        state: "Chandigarh",
        lat: 30.7,
        long: 76.7,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Jacaranda_mimosifolia_3707.jpg/100px-Jacaranda_mimosifolia_3707.jpg",
        population:1055450,
        capital: "Chandigarh",
        language: "Hindi,Punjabi",
    },
    {
        state: "Chhattisgarh",
        lat: 21.5,
        long: 81.8,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/..Chhattisgarh_Flag%28INDIA%29.png/100px-..Chhattisgarh_Flag%28INDIA%29.png",
        population:25545198,
        capital: "Raipur",
        language: "Hindi,Odia",
    },
    {
        state: "Dadra and Nagar Haveli and Daman and Diu",
        lat: 20.7,
        long: 70.9,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Dadra_and_Nagar_Haveli_and_Daman_and_Diu_emblem.png/100px-Dadra_and_Nagar_Haveli_and_Daman_and_Diu_emblem.png",
        population:585764,
        capital: "Daman",
        language: "Gujarati,Hindi",
    },
    {
        state: "Delhi",
        lat: 28.6,
        long: 77.3,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Seal_of_the_National_Capital_Territory_of_Delhi.svg/100px-Seal_of_the_National_Capital_Territory_of_Delhi.svg.png",
        population:16787941,
        capital: "New Delhi",
        language: "Hindi,Punjabi",
    },
    {
        state: "Goa",
        lat: 15.4,
        long: 74,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Goa_government_banner.png/100px-Goa_government_banner.png",
        population:1458545,
        capital: "Panaji",
        language: "Konkani,Marathi",
    },
    {
        state: "Gujarat",
        lat: 22.8,
        long: 71.4,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Government_Of_Gujarat_Seal_In_All_Languages.svg/100px-Government_Of_Gujarat_Seal_In_All_Languages.svg.png",
        population:60439692,
        capital: "Gandhinagar",
        language: "Gujarati,Hindi",
    },
    {
        state: "Haryana",
        lat: 29.2,
        long: 75.8,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/..Haryana_Flag%28INDIA%29.png/100px-..Haryana_Flag%28INDIA%29.png",
        population:25351462,
        capital: "Chandigarh",
        language: "Hindi,Punjabi",
    },
    {
        state: "Himachal Pradesh",
        lat: 32,
        long: 77.1,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Himachal_Pradesh_Flag%2C_India.png/100px-Himachal_Pradesh_Flag%2C_India.png",
        population:6864602,
        capital: "Shimla",
        language: "Hindi,Punjabi",
    },
    {
        state: "Jammu and Kashmir",
        lat: 33.6,
        long: 75,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Government_of_Jammu_and_Kashmir.svg/100px-Government_of_Jammu_and_Kashmir.svg.png",
        population:12267032,
        capital: "Srinagar,Jammu",
        language: "Kashmiri,Dogri",
    },
    {
        state: "Jharkhand",
        lat: 23.3,
        long: 85,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/100px-Jharkhand_Rajakiya_Chihna.svg.png",
        population:32988134,
        capital: "Ranchi",
        language: "Hindi,Santali",
    },
    {
        state: "Karnataka",
        lat: 14.4,
        long: 75.4,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Seal_of_Karnataka.svg/100px-Seal_of_Karnataka.svg.png",
        population:61095297,
        capital: "Bengaluru",
        language: "Kannada,Urdu",
    },
    {
        state: "Kerala***",
        lat: 10.25,
        long: 76,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Government_of_Kerala_Logo.png/100px-Government_of_Kerala_Logo.png",
        population:33406061,
        capital: "Thiruvananthapuram",
        language: "Malayalam,Tamil",
    },
    {
        state: "Ladakh",
        lat: 34.1,
        long: 77.6,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Seal_of_Ladakh.png/100px-Seal_of_Ladakh.png",
        population:274000,
        capital: "Leh",
        language: "Kashmiri,Dogri",
    },
    {
        state: "Lakshadweep",
        lat: 10.3,
        long: 72.6,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Banner_of_Lakshadweep.png/100px-Banner_of_Lakshadweep.png",
        population:64473,
        capital: "Kavaratti",
        language: "Malayalam,Dhivehi",
    },
    {
        state: "Madhya Pradesh",
        lat: 23.2,
        long: 77.7,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/..Madhya_Pradesh_Flag%28INDIA%29.png/100px-..Madhya_Pradesh_Flag%28INDIA%29.png",
        population:72626809,
        capital: "Bhopal",
        language: "Hindi,Marathi",
    },
    {
        state: "Maharashtra",
        lat: 19.3,
        long: 75,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Seal_of_Maharashtra.png/100px-Seal_of_Maharashtra.png",
        population:112374333,
        capital: "Mumbai",
        language: "Marathi,Hindi",
    },
    {
        state: "Manipur",
        lat: 24.7,
        long: 93.8,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/..Manipur_Flag%28INDIA%29.png/100px-..Manipur_Flag%28INDIA%29.png",
        population:2570390,
        capital: "Imphal",
        language: "Meitei,Nepali",
    },
    {
        state: "Meghalaya",
        lat: 25.5,
        long: 91.1,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Seal_of_Meghalaya.svg/100px-Seal_of_Meghalaya.svg.png",
        population:2966889,
        capital: "Shillong",
        language: "English,Garo",
    },
    {
        state: "Mizoram",
        lat: 23.2,
        long: 92.7,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Seal_of_Mizoram.svg/100px-Seal_of_Mizoram.svg.png",
        population:1097206,
        capital: "Aizawl",
        language: "Mizo,English",
    },
    {
        state: "Nagaland",
        lat: 26.1,
        long: 94.5,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/..Nagaland_Flag%28INDIA%29.png/100px-..Nagaland_Flag%28INDIA%29.png",
        population:1978502,
        capital: "Kohima",
        language: "Naga languages,English",
    },
    {
        state: "Odisha",
        lat: 20.6,
        long: 84.4,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Orissa_Flag%28INDIA%29.png/100px-Orissa_Flag%28INDIA%29.png",
        population:41974219,
        capital: "Bhubaneswar",
        language: "Odia,Hindi",
    },
    {
        state: "Puducherry",
        lat: 11.9,
        long: 79.8,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Seal_of_Puducherry.svg/100px-Seal_of_Puducherry.svg.png",
        population:1247953,
        capital: "Pondicherry",
        language: "Tamil,Telugu",
    },
    {
        state: "Punjab",
        lat: 31,
        long: 75.2,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Seal_of_Punjab.svg/100px-Seal_of_Punjab.svg.png",
        population:27743338,
        capital: "Chandigarh",
        language: "Punjabi,Hindi",
    },
    {
        state: "Rajasthan",
        lat: 26.8,
        long: 73.6,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Emblem_Rajasthan.png/100px-Emblem_Rajasthan.png",
        population:68548437,
        capital: "Jaipur",
        language: "Hindi,Punjabi",
    },
    {
        state: "Sikkim",
        lat: 27.5,
        long: 88.4,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Seal_of_Sikkim.svg/100px-Seal_of_Sikkim.svg.png",
        population:610577,
        capital: "Gangtok",
        language: "Nepali,Hindi",
    },
    {
        state: "Tamil Nadu",
        lat: 10.9,
        long: 79,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TamilNadu_Logo.svg/100px-TamilNadu_Logo.svg.png",
        population:72147030,
        capital: "Chennai",
        language: "Tamil,Telugu",
    },
    {
        state: "Telangana",
        lat: 17.8,
        long: 79,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Government_of_Telangana_Logo.png/100px-Government_of_Telangana_Logo.png",
        population:35003674,
        capital: "Hyderabad",
        language: "Telugu,Urdu",
    },
    {
        state: "Tripura",
        lat: 23.7,
        long: 91.5,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Seal_of_Tripura.svg/100px-Seal_of_Tripura.svg.png",
        population:3673917,
        capital: "Agartala",
        language: "Bengali,Kokborok",
    },
    {
        state: "Uttarakhand",
        lat: 30.3,
        long: 79.1,
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Seal_of_Uttarakhand.svg/100px-Seal_of_Uttarakhand.svg.png",
        population:10086292,
        capital: "Dehradun,Gairsain",
        language: "Hindi,Urdu",
    },
    {
        state: "Uttar Pradesh",
        lat: 27,
        long: 80.7,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Seal_of_Uttar_Pradesh.png/100px-Seal_of_Uttar_Pradesh.png",
        population:199812341,
        capital: "Lucknow",
        language: "Hindi,Urdu",
    },
    {
        state: "West Bengal",
        lat: 23.2,
        long: 87.7,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Emblem_of_West_Bengal.svg/100px-Emblem_of_West_Bengal.svg.png",
        population:91276115,
        capital: "Kolkata",
        language: "Bengali,Hindi",
    }

]

