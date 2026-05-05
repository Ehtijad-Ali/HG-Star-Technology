/**
 * HG STAR TECHNOLOGY - Industrial Laser Catalog
 * Main JavaScript Module
 */

// ========================================
// Product Data (from Excel)
// ========================================
/** Quote-led catalog: hide list prices on cards and in modal when false */
const SHOW_LIST_PRICES = false;

const PRODUCT_DATA = {"products": [{"id": "plate-01", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "E-Series", "model": "SMART3015E", "subtitle": "1.5KW Fiber Laser · 3*1.5m Work Area", "badge": "Entry Level", "specs": {"Laser Power": "1.5kw", "Work Area": "3*1.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS03K", "CNC System": "HGSTAR XC-3000", "Servo Drive": "Delta", "Valve System": "SMC low pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "nan", "Display": "22 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 12200, "endPrice": 15860, "currency": "EUR", "shipment": "1*20GP"}, {"id": "plate-02", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "E-Series", "model": "SMART3015E", "subtitle": "2KW Fiber Laser · 3*1.5m Work Area", "badge": "Entry Level", "specs": {"Laser Power": "2kw", "Work Area": "3*1.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS03K", "CNC System": "HGSTAR XC-3000", "Servo Drive": "Delta", "Valve System": "SMC low pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "nan", "Display": "22 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 13200, "endPrice": 17160, "currency": "EUR", "shipment": "1*20GP"}, {"id": "plate-03", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "E-Series", "model": "SMART3015E", "subtitle": "3KW Fiber Laser · 3*1.5m Work Area", "badge": "Value", "specs": {"Laser Power": "3kw", "Work Area": "3*1.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS03K", "CNC System": "HGSTAR XC-3000", "Servo Drive": "Delta", "Valve System": "SMC low pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "nan", "Display": "22 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 14000, "endPrice": 18200, "currency": "EUR", "shipment": "1*20GP"}, {"id": "plate-04", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "E-Series", "model": "SMART3015E", "subtitle": "6KW Fiber Laser · 3*1.5m Work Area", "badge": "Value", "specs": {"Laser Power": "6KW", "Work Area": "3*1.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS06K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Delta", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "nan", "Display": "22 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 19250, "endPrice": 25025, "currency": "EUR", "shipment": "1*20GP"}, {"id": "plate-05", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART3015PRO", "subtitle": "2KW Fiber Laser · 3*1.5m Work Area", "badge": "Professional", "specs": {"Laser Power": "2kw", "Work Area": "3*1.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS03K", "CNC System": "HGSTAR XC-3000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 24500, "endPrice": 31850, "currency": "EUR", "shipment": "1*40HQ"}, {"id": "plate-06", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART3015PRO", "subtitle": "3KW Fiber Laser · 3*1.5m Work Area", "badge": "Professional", "specs": {"Laser Power": "3kw", "Work Area": "3*1.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS03K", "CNC System": "HGSTAR XC-3000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 25300, "endPrice": 32890, "currency": "EUR", "shipment": "1*40HQ"}, {"id": "plate-07", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART3015PRO", "subtitle": "6KW Fiber Laser · 3*1.5m Work Area", "badge": "Best Seller", "specs": {"Laser Power": "6kw", "Work Area": "3*1.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS06K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 30600, "endPrice": 39780, "currency": "EUR", "shipment": "1*40HQ"}, {"id": "plate-08", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART3015PRO", "subtitle": "12KW Fiber Laser · 3*1.5m Work Area", "badge": "Best Seller", "specs": {"Laser Power": "12kw", "Work Area": "3*1.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS12K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 45500, "endPrice": 59150, "currency": "EUR", "shipment": "1*40HQ"}, {"id": "plate-09", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART3015PRO", "subtitle": "20KW Fiber Laser · 3*1.5M Work Area", "badge": "Professional", "specs": {"Laser Power": "20KW", "Work Area": "3*1.5M", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS20K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "yes", "Pneumatic Door": "yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "yes"}, "dealerPrice": 64750, "endPrice": 84175, "currency": "EUR", "shipment": "1*40HQ"}, {"id": "plate-10", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART3015PRO", "subtitle": "30KW Fiber Laser · 3*1.5M Work Area", "badge": "Heavy Duty", "specs": {"Laser Power": "30KW", "Work Area": "3*1.5M", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS30K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "yes", "Pneumatic Door": "yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "yes"}, "dealerPrice": 87500, "endPrice": 113750, "currency": "EUR", "shipment": "1*40HQ"}, {"id": "plate-11", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "E-Series", "model": "SMART4015E", "subtitle": "1.5KW Fiber Laser · 4*1.5m Work Area", "badge": "Entry Level", "specs": {"Laser Power": "1.5kw", "Work Area": "4*1.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS03K", "CNC System": "HGSTAR XC-3000", "Servo Drive": "Delta", "Valve System": "SMC low pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "nan", "Display": "22 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 13500, "endPrice": 17550, "currency": "EUR", "shipment": "1*20GP"}, {"id": "plate-12", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "E-Series", "model": "SMART4015E", "subtitle": "2KW Fiber Laser · 4*1.5m Work Area", "badge": "Entry Level", "specs": {"Laser Power": "2kw", "Work Area": "4*1.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS03K", "CNC System": "HGSTAR XC-3000", "Servo Drive": "Delta", "Valve System": "SMC low pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "nan", "Display": "22 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 14400, "endPrice": 18720, "currency": "EUR", "shipment": "1*20GP"}, {"id": "plate-13", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "E-Series", "model": "SMART4015E", "subtitle": "3KW Fiber Laser · 4*1.5m Work Area", "badge": "Value", "specs": {"Laser Power": "3kw", "Work Area": "4*1.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS03K", "CNC System": "HGSTAR XC-3000", "Servo Drive": "Delta", "Valve System": "SMC low pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "nan", "Display": "22 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 15300, "endPrice": 19890, "currency": "EUR", "shipment": "1*20GP"}, {"id": "plate-14", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "E-Series", "model": "SMART4015E", "subtitle": "6KW Fiber Laser · 4*1.5m Work Area", "badge": "Value", "specs": {"Laser Power": "6KW", "Work Area": "4*1.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS06K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Delta", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "nan", "Display": "22 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 20500, "endPrice": 26650, "currency": "EUR", "shipment": "1*20GP"}, {"id": "plate-15", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART4020 PRO", "subtitle": "2KW Fiber Laser · 4*2m Work Area", "badge": "Professional", "specs": {"Laser Power": "2kw", "Work Area": "4*2m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS03K", "CNC System": "HGSTAR XC-3000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 31500, "endPrice": 40950, "currency": "EUR", "shipment": "1*40FR"}, {"id": "plate-16", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART4020 PRO", "subtitle": "3KW Fiber Laser · 4*2m Work Area", "badge": "Professional", "specs": {"Laser Power": "3kw", "Work Area": "4*2m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS03K", "CNC System": "HGSTAR XC-3000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 32300, "endPrice": 41990, "currency": "EUR", "shipment": "1*40FR"}, {"id": "plate-17", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART4020 PRO", "subtitle": "6KW Fiber Laser · 4*2m Work Area", "badge": "Popular", "specs": {"Laser Power": "6kw", "Work Area": "4*2m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS06K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 37600, "endPrice": 48880, "currency": "EUR", "shipment": "1*40FR"}, {"id": "plate-18", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART4020 PRO", "subtitle": "12KW Fiber Laser · 4*2m Work Area", "badge": "Popular", "specs": {"Laser Power": "12kw", "Work Area": "4*2m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS12K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 52500, "endPrice": 68250, "currency": "EUR", "shipment": "1*40FR"}, {"id": "plate-19", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART4020 PRO", "subtitle": "20KW Fiber Laser · 4*2m Work Area", "badge": "Professional", "specs": {"Laser Power": "20kw", "Work Area": "4*2m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS20K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 71750, "endPrice": 93275, "currency": "EUR", "shipment": "1*40FR"}, {"id": "plate-20", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART4020 PRO", "subtitle": "30KW Fiber Laser · 4*2m Work Area", "badge": "Heavy Duty", "specs": {"Laser Power": "30kw", "Work Area": "4*2m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS30K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 94500, "endPrice": 122850, "currency": "EUR", "shipment": "1*40FR"}, {"id": "plate-21", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "E-Series", "model": "SMART6015E", "subtitle": "1.5KW Fiber Laser · 6*1.5m Work Area", "badge": "Entry Level", "specs": {"Laser Power": "1.5kw", "Work Area": "6*1.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS03K", "CNC System": "HGSTAR XC-3000", "Servo Drive": "Delta", "Valve System": "SMC low pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "nan", "Display": "22 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 16800, "endPrice": 21840, "currency": "EUR", "shipment": "1*40HQ"}, {"id": "plate-22", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "E-Series", "model": "SMART6015E", "subtitle": "2KW Fiber Laser · 6*1.5m Work Area", "badge": "Entry Level", "specs": {"Laser Power": "2kw", "Work Area": "6*1.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS03K", "CNC System": "HGSTAR XC-3000", "Servo Drive": "Delta", "Valve System": "SMC low pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "nan", "Display": "22 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 17600, "endPrice": 22880, "currency": "EUR", "shipment": "1*40HQ"}, {"id": "plate-23", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "E-Series", "model": "SMART6015E", "subtitle": "3KW Fiber Laser · 6*1.5m Work Area", "badge": "Value", "specs": {"Laser Power": "3kw", "Work Area": "6*1.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS03K", "CNC System": "HGSTAR XC-3000", "Servo Drive": "Delta", "Valve System": "SMC low pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "nan", "Display": "22 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 18550, "endPrice": 24115, "currency": "EUR", "shipment": "1*40HQ"}, {"id": "plate-24", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "E-Series", "model": "SMART6015E", "subtitle": "6KW Fiber Laser · 6*1.5m Work Area", "badge": "Value", "specs": {"Laser Power": "6KW", "Work Area": "6*1.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS06K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Delta", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "nan", "Display": "22 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 23800, "endPrice": 30940, "currency": "EUR", "shipment": "1*40HQ"}, {"id": "plate-25", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART6025 PRO", "subtitle": "2KW Fiber Laser · 6*2.5m Work Area", "badge": "Professional", "specs": {"Laser Power": "2kw", "Work Area": "6*2.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS03K", "CNC System": "HGSTAR XC-3000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 37600, "endPrice": 48880, "currency": "EUR", "shipment": "1*40FR"}, {"id": "plate-26", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART6025PRO", "subtitle": "3KW Fiber Laser · 6*2.5m Work Area", "badge": "Professional", "specs": {"Laser Power": "3kw", "Work Area": "6*2.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS03K", "CNC System": "HGSTAR XC-3000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 38500, "endPrice": 50050, "currency": "EUR", "shipment": "1*40FR"}, {"id": "plate-27", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART6025 PRO", "subtitle": "6KW Fiber Laser · 6*2.5m Work Area", "badge": "Professional", "specs": {"Laser Power": "6kw", "Work Area": "6*2.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS06K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 43750, "endPrice": 56875, "currency": "EUR", "shipment": "1*40FR"}, {"id": "plate-28", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART6025 PRO", "subtitle": "12KW Fiber Laser · 6*2.5m Work Area", "badge": "Heavy Duty", "specs": {"Laser Power": "12kw", "Work Area": "6*2.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS12K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 58600, "endPrice": 76180, "currency": "EUR", "shipment": "1*40FR"}, {"id": "plate-29", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART6025 PRO", "subtitle": "20KW Fiber Laser · 6*2.5m Work Area", "badge": "Heavy Duty", "specs": {"Laser Power": "20kw", "Work Area": "6*2.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS20K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 77800, "endPrice": 101140, "currency": "EUR", "shipment": "1*40FR"}, {"id": "plate-30", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART6025 PRO", "subtitle": "30KW Fiber Laser · 6*2.5m Work Area", "badge": "Heavy Duty", "specs": {"Laser Power": "30kw", "Work Area": "6*2.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS30K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 100600, "endPrice": 130780, "currency": "EUR", "shipment": "1*40FR"}, {"id": "plate-31", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART8025 PRO", "subtitle": "3KW Fiber Laser · 8*2.5m Work Area", "badge": "Industrial", "specs": {"Laser Power": "3kw", "Work Area": "8*2.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS03K", "CNC System": "HGSTAR XC-3000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 43300, "endPrice": 56290, "currency": "EUR", "shipment": "1*40FR+1*40HQ"}, {"id": "plate-32", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART8025 PRO", "subtitle": "6KW Fiber Laser · 8*2.5m Work Area", "badge": "Industrial", "specs": {"Laser Power": "6kw", "Work Area": "8*2.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS06K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 48500, "endPrice": 63050, "currency": "EUR", "shipment": "1*40FR+1*40HQ"}, {"id": "plate-33", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART8025 PRO", "subtitle": "12KW Fiber Laser · 8*2.5m Work Area", "badge": "High Power", "specs": {"Laser Power": "12kw", "Work Area": "8*2.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS12K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 63400, "endPrice": 82420, "currency": "EUR", "shipment": "1*40FR+1*40HQ"}, {"id": "plate-34", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART8025 PRO", "subtitle": "20KW Fiber Laser · 8*2.5m Work Area", "badge": "High Power", "specs": {"Laser Power": "20kw", "Work Area": "8*2.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS20K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 82600, "endPrice": 107380, "currency": "EUR", "shipment": "1*40FR+1*40HQ"}, {"id": "plate-35", "category": "cutting", "categoryLabel": "Plate Cutting", "series": "PRO Series", "model": "SMART8025 PRO", "subtitle": "30KW Fiber Laser · 8*2.5m Work Area", "badge": "High Power", "specs": {"Laser Power": "30kw", "Work Area": "8*2.5m", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS30K", "CNC System": "HGSTAR XC-6000", "Servo Drive": "Inovance", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "2pcs", "Display": "27 inch screen", "Gas Exhaust": "Yes"}, "dealerPrice": 105500, "endPrice": 137150, "currency": "EUR", "shipment": "1*40FR+1*40HQ"}, {"id": "tube-36", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-Tube", "model": "SMART-Tube6015", "subtitle": "1.5KW Fiber Laser · Tube: 20-230mm", "badge": "Entry Level", "specs": {"Laser Power": "1.5KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM111", "CNC System": "FSCUT3000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "1.5m", "Tube Diameter": "20-230mm", "Square Tube": "20*20-230*230mm", "Max Loading": "200KG", "Valve System": "1pcs SMC low pressure valve", "Pipe Holder": "feeler wheel + pneumatic centering clamp", "Unloading": "Simple rack", "Display": "24 inch screen"}, "dealerPrice": 41500, "endPrice": 53950, "currency": "USD", "shipment": "1*40HQ (without automatic loading system)\n2*40HQ(with automatic loading system)"}, {"id": "tube-37", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-Tube", "model": "SMART-Tube6015", "subtitle": "2KW Fiber Laser · Tube: 20-230mm", "badge": "Entry Level", "specs": {"Laser Power": "2KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM111", "CNC System": "FSCUT3000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "1.5m", "Tube Diameter": "20-230mm", "Square Tube": "20*20-230*230mm", "Max Loading": "200KG", "Valve System": "1pcs SMC low pressure valve", "Pipe Holder": "feeler wheel + pneumatic centering clamp", "Unloading": "Simple rack", "Display": "24 inch screen"}, "dealerPrice": 42500, "endPrice": 55250, "currency": "USD", "shipment": "1*40HQ"}, {"id": "tube-38", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-Tube", "model": "SMART-Tube6015", "subtitle": "3KW Fiber Laser · Tube: 20-230mm", "badge": "Entry Level", "specs": {"Laser Power": "3KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM111", "CNC System": "FSCUT3000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "1.5m", "Tube Diameter": "20-230mm", "Square Tube": "20*20-230*230mm", "Max Loading": "200KG", "Valve System": "1pcs SMC low pressure valve", "Pipe Holder": "feeler wheel + pneumatic centering clamp", "Unloading": "Simple rack", "Display": "24 inch screen"}, "dealerPrice": 44500, "endPrice": 57850, "currency": "USD", "shipment": "1*40HQ"}, {"id": "tube-39", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-Tube", "model": "SMART-Tube6015", "subtitle": "6KW Fiber Laser · Tube: 20-230mm", "badge": "Entry Level", "specs": {"Laser Power": "6KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM06k", "CNC System": "FSCUT3000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "1.5m", "Tube Diameter": "20-230mm", "Square Tube": "20*20-230*230mm", "Max Loading": "200KG", "Valve System": "2 pcs SMC low and hight pressure valve", "Pipe Holder": "feeler wheel + pneumatic centering clamp", "Unloading": "Simple rack", "Display": "24 inch screen"}, "dealerPrice": 51500, "endPrice": 66950, "currency": "USD", "shipment": "1*40HQ"}, {"id": "tube-40", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-Tube", "model": "SMART-Tube6015", "subtitle": "1.5KW Fiber Laser · Tube: 20-350mm", "badge": "Entry Level", "specs": {"Laser Power": "1.5KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM111", "CNC System": "FSCUT3000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "1.5m", "Tube Diameter": "20-350mm", "Square Tube": "20*20-350*350mm", "Max Loading": "400KG", "Valve System": "1pcs SMC low pressure valve", "Pipe Holder": "feeler wheel + pneumatic centering clamp", "Unloading": "Simple rack", "Display": "24 inch screen"}, "dealerPrice": 55500, "endPrice": 72150, "currency": "USD", "shipment": "1*40HQ"}, {"id": "tube-41", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-Tube", "model": "SMART-Tube6015", "subtitle": "2KW Fiber Laser · Tube: 20-350mm", "badge": "Entry Level", "specs": {"Laser Power": "2KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM111", "CNC System": "FSCUT3000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "1.5m", "Tube Diameter": "20-350mm", "Square Tube": "20*20-350*350mm", "Max Loading": "400KG", "Valve System": "1pcs SMC low pressure valve", "Pipe Holder": "feeler wheel + pneumatic centering clamp", "Unloading": "Simple rack", "Display": "24 inch screen"}, "dealerPrice": 56500, "endPrice": 73450, "currency": "USD", "shipment": "1*40HQ"}, {"id": "tube-42", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-Tube", "model": "SMART-Tube6015", "subtitle": "3KW Fiber Laser · Tube: 20-350mm", "badge": "Entry Level", "specs": {"Laser Power": "3KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM111", "CNC System": "FSCUT3000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "3m", "Tube Diameter": "20-350mm", "Square Tube": "20*20-350*350mm", "Max Loading": "400KG", "Valve System": "1pcs SMC low pressure valve", "Pipe Holder": "feeler wheel + pneumatic centering clamp", "Unloading": "Simple rack", "Display": "24 inch screen"}, "dealerPrice": 58000, "endPrice": 75400, "currency": "USD", "shipment": "1*40HQ"}, {"id": "tube-43", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-Tube", "model": "SMART-Tube6015", "subtitle": "6KW Fiber Laser · Tube: 20-350mm", "badge": "Entry Level", "specs": {"Laser Power": "6KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM06k", "CNC System": "FSCUT3000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "3m", "Tube Diameter": "20-350mm", "Square Tube": "20*20-350*350mm", "Max Loading": "400KG", "Valve System": "2 pcs SMC low and hight pressure valve", "Pipe Holder": "feeler wheel + pneumatic centering clamp", "Unloading": "Simple rack", "Display": "24 inch screen"}, "dealerPrice": 65000, "endPrice": 84500, "currency": "USD", "shipment": "1*40HQ"}, {"id": "tube-44", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-TP-2Chuck", "model": "SMART-TP6030", "subtitle": "1.5KW Fiber Laser · Tube: 20-230mm", "badge": "Advanced (2-Chuck)", "specs": {"Laser Power": "1.5KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM111", "CNC System": "FSCUT5000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "3m", "Tube Diameter": "20-230mm", "Square Tube": "20*20-230*230mm", "Max Loading": "300KG", "Valve System": "2pcs SMC low and high pressure valve", "Pipe Holder": "servo holder", "Unloading": "Rack with feeler wheel and enclosed cover", "Display": "24 inch screen"}, "dealerPrice": 60500, "endPrice": 78650, "currency": "USD", "shipment": "1*40HQ"}, {"id": "tube-45", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-TP-2Chuck", "model": "SMART-TP6030", "subtitle": "2KW Fiber Laser · Tube: 20-230mm", "badge": "Advanced (2-Chuck)", "specs": {"Laser Power": "2KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM111", "CNC System": "FSCUT5000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "3m", "Tube Diameter": "20-230mm", "Square Tube": "20*20-230*230mm", "Max Loading": "300KG", "Valve System": "2pcs SMC low and high pressure valve", "Pipe Holder": "servo holder", "Unloading": "Rack with feeler wheel and enclosed cover", "Display": "24 inch screen"}, "dealerPrice": 61500, "endPrice": 79950, "currency": "USD", "shipment": "1*40HQ"}, {"id": "tube-46", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-TP-2Chuck", "model": "SMART-TP6030", "subtitle": "3KW Fiber Laser · Tube: 20-230mm", "badge": "Advanced (2-Chuck)", "specs": {"Laser Power": "3KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM111", "CNC System": "FSCUT5000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "3m", "Tube Diameter": "20-230mm", "Square Tube": "20*20-230*230mm", "Max Loading": "300KG", "Valve System": "2pcs SMC low and high pressure valve", "Pipe Holder": "servo holder", "Unloading": "Rack with feeler wheel and enclosed cover", "Display": "24 inch screen"}, "dealerPrice": 63500, "endPrice": 82550, "currency": "USD", "shipment": "1*40HQ"}, {"id": "tube-47", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-TP-2Chuck", "model": "SMART-TP6030", "subtitle": "6KW Fiber Laser · Tube: 20-230mm", "badge": "Advanced (2-Chuck)", "specs": {"Laser Power": "6KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM06k", "CNC System": "FSCUT5000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "3m", "Tube Diameter": "20-230mm", "Square Tube": "20*20-230*230mm", "Max Loading": "300KG", "Valve System": "2pcs SMC low and high pressure valve", "Pipe Holder": "servo holder", "Unloading": "Rack with feeler wheel and enclosed cover", "Display": "24 inch screen"}, "dealerPrice": 70500, "endPrice": 91650, "currency": "USD", "shipment": "1*40HQ"}, {"id": "tube-48", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-TP-2Chuck", "model": "SMART-TP6030", "subtitle": "1.5KW Fiber Laser · Tube: 20-350mm", "badge": "Advanced (2-Chuck)", "specs": {"Laser Power": "1.5KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM111", "CNC System": "FSCUT5000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "3m", "Tube Diameter": "20-350mm", "Square Tube": "20*20-350*350mm", "Max Loading": "600KG", "Valve System": "2pcs SMC low and high pressure valve", "Pipe Holder": "servo holder", "Unloading": "Rack with feeler wheel and enclosed cover", "Display": "24 inch screen"}, "dealerPrice": 70000, "endPrice": 91000, "currency": "USD", "shipment": "1*40HQ"}, {"id": "tube-49", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-TP-2Chuck", "model": "SMART-TP6030", "subtitle": "2KW Fiber Laser · Tube: 20-350mm", "badge": "Advanced (2-Chuck)", "specs": {"Laser Power": "2KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM111", "CNC System": "FSCUT5000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "3m", "Tube Diameter": "20-350mm", "Square Tube": "20*20-350*350mm", "Max Loading": "600KG", "Valve System": "2pcs SMC low and high pressure valve", "Pipe Holder": "servo holder", "Unloading": "Rack with feeler wheel and enclosed cover", "Display": "24 inch screen"}, "dealerPrice": 71000, "endPrice": 92300, "currency": "USD", "shipment": "1*40HQ"}, {"id": "tube-50", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-TP-2Chuck", "model": "SMART-TP6030", "subtitle": "3KW Fiber Laser · Tube: 20-350mm", "badge": "Advanced (2-Chuck)", "specs": {"Laser Power": "3KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM111", "CNC System": "FSCUT5000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "3m", "Tube Diameter": "20-350mm", "Square Tube": "20*20-350*350mm", "Max Loading": "600KG", "Valve System": "2pcs SMC low and high pressure valve", "Pipe Holder": "servo holder", "Unloading": "Rack with feeler wheel and enclosed cover", "Display": "24 inch screen"}, "dealerPrice": 73000, "endPrice": 94900, "currency": "USD", "shipment": "1*40HQ"}, {"id": "tube-51", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-TP-2Chuck", "model": "SMART-TP6030", "subtitle": "6KW Fiber Laser · Tube: 20-350mm", "badge": "Advanced (2-Chuck)", "specs": {"Laser Power": "6KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM06k", "CNC System": "FSCUT5000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "3m", "Tube Diameter": "20-350mm", "Square Tube": "20*20-350*350mm", "Max Loading": "600KG", "Valve System": "2pcs SMC low and high pressure valve", "Pipe Holder": "servo holder", "Unloading": "Rack with feeler wheel and enclosed cover", "Display": "24 inch screen"}, "dealerPrice": 80000, "endPrice": 104000, "currency": "USD", "shipment": "1*40HQ"}, {"id": "tube-52", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-TP-3Chuck", "model": "SMART-TP6060", "subtitle": "1.5KW Fiber Laser · Tube: 20-230mm", "badge": "Premium (3-Chuck)", "specs": {"Laser Power": "1.5KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM111", "CNC System": "FSCUT5000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "6m", "Tube Diameter": "20-230mm", "Square Tube": "20*20-230*230mm", "Max Loading": "300KG", "Valve System": "2pcs SMC low and high pressure valve", "Pipe Holder": "servo holder", "Unloading": "Floating plate unloading system with enclosed cover", "Display": "24 inch screen"}, "dealerPrice": 117000, "endPrice": 152100, "currency": "USD", "shipment": "2*40HQ"}, {"id": "tube-53", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-TP-3Chuck", "model": "SMART-TP6060", "subtitle": "2KW Fiber Laser · Tube: 20-230mm", "badge": "Premium (3-Chuck)", "specs": {"Laser Power": "2KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM111", "CNC System": "FSCUT5000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "6m", "Tube Diameter": "20-230mm", "Square Tube": "20*20-230*230mm", "Max Loading": "300KG", "Valve System": "2pcs SMC low and high pressure valve", "Pipe Holder": "servo holder", "Unloading": "Floating plate unloading system with enclosed cover", "Display": "24 inch screen"}, "dealerPrice": 118000, "endPrice": 153400, "currency": "USD", "shipment": "2*40HQ"}, {"id": "tube-54", "category": "tube", "categoryLabel": "Tube Cutting", "series": "SMART-TP-3Chuck", "model": "SMART-TP6060", "subtitle": "3KW Fiber Laser · Tube: 20-230mm", "badge": "Premium (3-Chuck)", "specs": {"Laser Power": "3KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM111", "CNC System": "FSCUT5000", "Servo Drive": "YASKAWA", "Max Loading Length": "6m", "Blanking Length": "6m", "Tube Diameter": "20-230mm", "Square Tube": "20*20-230*230mm", "Max Loading": "300KG", "Valve System": "2pcs SMC low and high pressure valve", "Pipe Holder": "servo holder", "Unloading": "Floating plate unloading system with enclosed cover", "Display": "24 inch screen"}, "dealerPrice": 120000, "endPrice": 156000, "currency": "USD", "shipment": "2*40HQ"}, {"id": "tube-55", "category": "tube", "categoryLabel": "Tube Cutting", "series": "TP-Heavy", "model": "SMART-TP1212F", "subtitle": "6KW Fiber Laser · Tube: 20-350mm", "badge": "Heavy Duty", "specs": {"Laser Power": "6KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM06k", "CNC System": "FSCUT5000", "Servo Drive": "YASKAWA", "Max Loading Length": "nan", "Blanking Length": "nan", "Tube Diameter": "20-350mm", "Square Tube": "20*20-350*350mm", "Max Loading": "nan", "Valve System": "2pcs SMC low and high pressure valve", "Pipe Holder": "servo holder", "Unloading": "nan", "Display": "24 inch screen"}, "dealerPrice": 1, "endPrice": 0, "currency": "USD", "shipment": ""}, {"id": "tube-56", "category": "tube", "categoryLabel": "Tube Cutting", "series": "TP-Heavy", "model": "SMART-TP1212F", "subtitle": "12KW Fiber Laser · Tube: 20-350mm", "badge": "Heavy Duty", "specs": {"Laser Power": "12KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS12K", "CNC System": "FSCUT5000", "Servo Drive": "YASKAWA", "Max Loading Length": "nan", "Blanking Length": "nan", "Tube Diameter": "20-350mm", "Square Tube": "20*20-350*350mm", "Max Loading": "nan", "Valve System": "2pcs SMC low and high pressure valve", "Pipe Holder": "servo holder", "Unloading": "nan", "Display": "24 inch screen"}, "dealerPrice": 1, "endPrice": 0, "currency": "USD", "shipment": ""}, {"id": "tube-57", "category": "tube", "categoryLabel": "Tube Cutting", "series": "TP-Heavy", "model": "SMART-TP1212F", "subtitle": "6KW Fiber Laser · Tube: 40*40-500*500mm", "badge": "Heavy Duty", "specs": {"Laser Power": "6KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM06k", "CNC System": "FSCUT5000", "Servo Drive": "YASKAWA", "Max Loading Length": "nan", "Blanking Length": "nan", "Tube Diameter": "40*40-500*500mm", "Square Tube": "40*40-500*500mm", "Max Loading": "nan", "Valve System": "2pcs SMC low and high pressure valve", "Pipe Holder": "servo holder", "Unloading": "nan", "Display": "24 inch screen"}, "dealerPrice": 1, "endPrice": 0, "currency": "USD", "shipment": ""}, {"id": "tube-58", "category": "tube", "categoryLabel": "Tube Cutting", "series": "TP-Heavy", "model": "SMART-TP1212F", "subtitle": "12KW Fiber Laser · Tube: 40*40-500*500mm", "badge": "Heavy Duty", "specs": {"Laser Power": "12KW", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS12K", "CNC System": "FSCUT5000", "Servo Drive": "YASKAWA", "Max Loading Length": "nan", "Blanking Length": "nan", "Tube Diameter": "40*40-500*500mm", "Square Tube": "40*40-500*500mm", "Max Loading": "nan", "Valve System": "2pcs SMC low and high pressure valve", "Pipe Holder": "servo holder", "Unloading": "nan", "Display": "24 inch screen"}, "dealerPrice": 1, "endPrice": 0, "currency": "USD", "shipment": ""}, {"id": "tube-59", "category": "tube", "categoryLabel": "Tube Cutting", "series": "TP-Heavy", "model": "SMART-TP1212F", "subtitle": "nan Fiber Laser · Tube: 20-350mm", "badge": "Heavy Duty", "specs": {"Laser Power": "nan", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BM06k", "CNC System": "FSCUT5000", "Servo Drive": "YASKAWA", "Max Loading Length": "nan", "Blanking Length": "nan", "Tube Diameter": "20-350mm", "Square Tube": "20*20-350*350mm", "Max Loading": "nan", "Valve System": "2pcs SMC low and high pressure valve", "Pipe Holder": "servo holder", "Unloading": "nan", "Display": "24 inch screen"}, "dealerPrice": 1, "endPrice": 0, "currency": "USD", "shipment": ""}, {"id": "tube-60", "category": "tube", "categoryLabel": "Tube Cutting", "series": "TP-Heavy", "model": "SMART-TP1212F", "subtitle": "nan Fiber Laser · Tube: 40*40-500*500mm", "badge": "Heavy Duty", "specs": {"Laser Power": "nan", "Laser Source": "Raycus CE", "Cutting Head": "Raytools BS12K", "CNC System": "FSCUT5000", "Servo Drive": "YASKAWA", "Max Loading Length": "nan", "Blanking Length": "nan", "Tube Diameter": "40*40-500*500mm", "Square Tube": "40*40-500*500mm", "Max Loading": "nan", "Valve System": "2pcs SMC low and high pressure valve", "Pipe Holder": "servo holder", "Unloading": "nan", "Display": "24 inch screen"}, "dealerPrice": 1, "endPrice": 0, "currency": "USD", "shipment": ""}, {"id": "tube-61", "category": "tube", "categoryLabel": "Tube Cutting", "series": "TP-Heavy", "model": "SMART-TP1212F", "subtitle": "nan Fiber Laser · Tube: 40*40-500*500mm", "badge": "Heavy Duty", "specs": {"Laser Power": "nan", "Laser Source": "", "Cutting Head": "", "CNC System": "", "Servo Drive": "", "Max Loading Length": "nan", "Blanking Length": "nan", "Tube Diameter": "40*40-500*500mm", "Square Tube": "40*40-500*500mm", "Max Loading": "nan", "Valve System": "", "Pipe Holder": "", "Unloading": "nan", "Display": ""}, "dealerPrice": 1, "endPrice": 0, "currency": "USD", "shipment": ""}, {"id": "tube-62", "category": "tube", "categoryLabel": "Tube Cutting", "series": "TP-Heavy", "model": "SMART-TP1212F", "subtitle": "nan Fiber Laser · Tube: 40*40-500*500mm", "badge": "Heavy Duty", "specs": {"Laser Power": "nan", "Laser Source": "", "Cutting Head": "", "CNC System": "", "Servo Drive": "", "Max Loading Length": "nan", "Blanking Length": "nan", "Tube Diameter": "40*40-500*500mm", "Square Tube": "40*40-500*500mm", "Max Loading": "nan", "Valve System": "", "Pipe Holder": "", "Unloading": "nan", "Display": ""}, "dealerPrice": 1, "endPrice": 0, "currency": "USD", "shipment": ""}, {"id": "combo-63", "category": "combo", "categoryLabel": "Combined Machines", "series": "E-Series", "model": "SMART3015-T", "subtitle": "1.5kw Fiber Laser · Plate 3*1.5m + Tube 20-230mm", "badge": "Entry Level", "specs": {"Laser Power": "1.5kw", "Laser Source": "Raycus", "Work Area": "3*1.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM111", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "No", "Loading Door": "No", "Display": "22 inch screen"}, "dealerPrice": 35000, "endPrice": 45500, "currency": "USD", "shipment": "1*40HQ"}, {"id": "combo-64", "category": "combo", "categoryLabel": "Combined Machines", "series": "E-Series", "model": "SMART3015-T", "subtitle": "2kw Fiber Laser · Plate 3*1.5m + Tube 20-230mm", "badge": "Entry Level", "specs": {"Laser Power": "2kw", "Laser Source": "Raycus", "Work Area": "3*1.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM111", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "No", "Loading Door": "No", "Display": "22 inch screen"}, "dealerPrice": 36000, "endPrice": 46800, "currency": "USD", "shipment": "1*40HQ"}, {"id": "combo-65", "category": "combo", "categoryLabel": "Combined Machines", "series": "E-Series", "model": "SMART3015-T", "subtitle": "3kw Fiber Laser · Plate 3*1.5m + Tube 20-230mm", "badge": "Standard", "specs": {"Laser Power": "3kw", "Laser Source": "Raycus", "Work Area": "3*1.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM111", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "No", "Loading Door": "No", "Display": "22 inch screen"}, "dealerPrice": 38000, "endPrice": 49400, "currency": "USD", "shipment": "1*40HQ"}, {"id": "combo-66", "category": "combo", "categoryLabel": "Combined Machines", "series": "E-Series", "model": "SMART3015-T", "subtitle": "6kw Fiber Laser · Plate 3*1.5m + Tube 20-230mm", "badge": "Standard", "specs": {"Laser Power": "6kw", "Laser Source": "Raycus", "Work Area": "3*1.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM06K", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "No", "Loading Door": "No", "Display": "22 inch screen"}, "dealerPrice": 47000, "endPrice": 61100, "currency": "USD", "shipment": "1*40HQ"}, {"id": "combo-67", "category": "combo", "categoryLabel": "Combined Machines", "series": "PRO Series", "model": "SMART3015PRO-T", "subtitle": "1.5kw Fiber Laser · Plate 3*1.5m + Tube 20-230mm", "badge": "Professional", "specs": {"Laser Power": "1.5kw", "Laser Source": "Raycus", "Work Area": "3*1.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM111", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "Yes", "Loading Door": "yes", "Display": "27 inch screen"}, "dealerPrice": 50000, "endPrice": 65000, "currency": "USD", "shipment": "1*40HQ"}, {"id": "combo-68", "category": "combo", "categoryLabel": "Combined Machines", "series": "PRO Series", "model": "SMART3015PRO-T", "subtitle": "2kw Fiber Laser · Plate 3*1.5m + Tube 20-230mm", "badge": "Professional", "specs": {"Laser Power": "2kw", "Laser Source": "Raycus", "Work Area": "3*1.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM111", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "Yes", "Loading Door": "yes", "Display": "27 inch screen"}, "dealerPrice": 51000, "endPrice": 66300, "currency": "USD", "shipment": "1*40HQ"}, {"id": "combo-69", "category": "combo", "categoryLabel": "Combined Machines", "series": "PRO Series", "model": "SMART3015PRO-T", "subtitle": "3kw Fiber Laser · Plate 3*1.5m + Tube 20-230mm", "badge": "Professional", "specs": {"Laser Power": "3kw", "Laser Source": "Raycus", "Work Area": "3*1.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM111", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "Yes", "Loading Door": "yes", "Display": "27 inch screen"}, "dealerPrice": 53000, "endPrice": 68900, "currency": "USD", "shipment": "1*40HQ"}, {"id": "combo-70", "category": "combo", "categoryLabel": "Combined Machines", "series": "PRO Series", "model": "SMART3015PRO-T", "subtitle": "6kw Fiber Laser · Plate 3*1.5m + Tube 20-230mm", "badge": "Professional", "specs": {"Laser Power": "6kw", "Laser Source": "Raycus", "Work Area": "3*1.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM06K", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "Yes", "Loading Door": "yes", "Display": "27 inch screen"}, "dealerPrice": 62000, "endPrice": 80600, "currency": "USD", "shipment": "1*40HQ"}, {"id": "combo-71", "category": "combo", "categoryLabel": "Combined Machines", "series": "E-Series", "model": "SMART4015-T", "subtitle": "2kw Fiber Laser · Plate 4*1.5m + Tube 20-230mm", "badge": "Standard", "specs": {"Laser Power": "2kw", "Laser Source": "Raycus", "Work Area": "4*1.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM111", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "No", "Loading Door": "No", "Display": "22 inch screen"}, "dealerPrice": 38000, "endPrice": 49400, "currency": "USD", "shipment": "1*40HQ"}, {"id": "combo-72", "category": "combo", "categoryLabel": "Combined Machines", "series": "E-Series", "model": "SMART4015-T", "subtitle": "3kw Fiber Laser · Plate 4*1.5m + Tube 20-230mm", "badge": "Standard", "specs": {"Laser Power": "3kw", "Laser Source": "Raycus", "Work Area": "4*1.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM111", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "No", "Loading Door": "No", "Display": "22 inch screen"}, "dealerPrice": 40000, "endPrice": 52000, "currency": "USD", "shipment": "1*40HQ"}, {"id": "combo-73", "category": "combo", "categoryLabel": "Combined Machines", "series": "E-Series", "model": "SMART4015-T", "subtitle": "6kw Fiber Laser · Plate 4*1.5m + Tube 20-230mm", "badge": "Standard", "specs": {"Laser Power": "6kw", "Laser Source": "Raycus", "Work Area": "4*1.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM06K", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "No", "Loading Door": "No", "Display": "22 inch screen"}, "dealerPrice": 42000, "endPrice": 54600, "currency": "USD", "shipment": "1*40HQ"}, {"id": "combo-74", "category": "combo", "categoryLabel": "Combined Machines", "series": "PRO Series", "model": "SMART4015PRO-T", "subtitle": "2kw Fiber Laser · Plate 4*1.5m + Tube 20-230mm", "badge": "Professional", "specs": {"Laser Power": "2kw", "Laser Source": "Raycus", "Work Area": "4*1.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM111", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "Yes", "Loading Door": "yes", "Display": "27 inch screen"}, "dealerPrice": 51500, "endPrice": 66950, "currency": "USD", "shipment": "1*40HQ+1*20GP"}, {"id": "combo-75", "category": "combo", "categoryLabel": "Combined Machines", "series": "PRO Series", "model": "SMART4015PRO-T", "subtitle": "3kw Fiber Laser · Plate 4*1.5m + Tube 20-230mm", "badge": "Professional", "specs": {"Laser Power": "3kw", "Laser Source": "Raycus", "Work Area": "4*1.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM111", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "Yes", "Loading Door": "yes", "Display": "27 inch screen"}, "dealerPrice": 53500, "endPrice": 69550, "currency": "USD", "shipment": "1*40HQ+1*20GP"}, {"id": "combo-76", "category": "combo", "categoryLabel": "Combined Machines", "series": "PRO Series", "model": "SMART4015PRO-T", "subtitle": "6kw Fiber Laser · Plate 4*1.5m + Tube 20-230mm", "badge": "Professional", "specs": {"Laser Power": "6kw", "Laser Source": "Raycus", "Work Area": "4*1.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM06K", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "Yes", "Loading Door": "yes", "Display": "27 inch screen"}, "dealerPrice": 62500, "endPrice": 81250, "currency": "USD", "shipment": "1*40HQ+1*20GP"}, {"id": "combo-77", "category": "combo", "categoryLabel": "Combined Machines", "series": "E-Series", "model": "SMART6025-T", "subtitle": "2kw Fiber Laser · Plate 6*2.5m + Tube 20-230mm", "badge": "Heavy Duty", "specs": {"Laser Power": "2kw", "Laser Source": "Raycus", "Work Area": "6*2.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM111", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "No", "Loading Door": "No", "Display": "22 inch screen"}, "dealerPrice": 55000, "endPrice": 71500, "currency": "USD", "shipment": "1*40FR"}, {"id": "combo-78", "category": "combo", "categoryLabel": "Combined Machines", "series": "E-Series", "model": "SMART6025-T", "subtitle": "3kw Fiber Laser · Plate 6*2.5m + Tube 20-230mm", "badge": "Heavy Duty", "specs": {"Laser Power": "3kw", "Laser Source": "Raycus", "Work Area": "6*2.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM111", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "No", "Loading Door": "No", "Display": "22 inch screen"}, "dealerPrice": 57000, "endPrice": 74100, "currency": "USD", "shipment": "1*40FR"}, {"id": "combo-79", "category": "combo", "categoryLabel": "Combined Machines", "series": "E-Series", "model": "SMART6025-T", "subtitle": "6kw Fiber Laser · Plate 6*2.5m + Tube 20-230mm", "badge": "Heavy Duty", "specs": {"Laser Power": "6kw", "Laser Source": "Raycus", "Work Area": "6*2.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM06K", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "No", "Pneumatic Door": "No", "Camera": "No", "Loading Door": "No", "Display": "22 inch screen"}, "dealerPrice": 66000, "endPrice": 85800, "currency": "USD", "shipment": "1*40FR"}, {"id": "combo-80", "category": "combo", "categoryLabel": "Combined Machines", "series": "PRO Series", "model": "SMART6025PRO-T", "subtitle": "2kw Fiber Laser · Plate 6*2.5m + Tube 20-230mm", "badge": "Heavy Duty", "specs": {"Laser Power": "2kw", "Laser Source": "Raycus", "Work Area": "6*2.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM111", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "Yes", "Loading Door": "yes", "Display": "27 inch screen"}, "dealerPrice": 71500, "endPrice": 92950, "currency": "USD", "shipment": "1*40FR+1*20GP"}, {"id": "combo-81", "category": "combo", "categoryLabel": "Combined Machines", "series": "PRO Series", "model": "SMART6025PRO-T", "subtitle": "3kw Fiber Laser · Plate 6*2.5m + Tube 20-230mm", "badge": "Heavy Duty", "specs": {"Laser Power": "3kw", "Laser Source": "Raycus", "Work Area": "6*2.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM111", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "Yes", "Loading Door": "yes", "Display": "27 inch screen"}, "dealerPrice": 73500, "endPrice": 95550, "currency": "USD", "shipment": "1*40FR+1*20GP"}, {"id": "combo-82", "category": "combo", "categoryLabel": "Combined Machines", "series": "PRO Series", "model": "SMART6025PRO-T", "subtitle": "6kw Fiber Laser · Plate 6*2.5m + Tube 20-230mm", "badge": "Heavy Duty", "specs": {"Laser Power": "6kw", "Laser Source": "Raycus", "Work Area": "6*2.5m", "Tube Diameter": "20-230mm", "Cutting Head": "Raytools BM06K", "CNC System": "Cypcut, FSCUT3000", "Servo Drive": "Yaskawa", "Valve System": "SMC low pressure valve + SMC high pressure valve", "Exchange Table": "Yes", "Pneumatic Door": "Yes", "Camera": "Yes", "Loading Door": "yes", "Display": "27 inch screen"}, "dealerPrice": 82500, "endPrice": 107250, "currency": "USD", "shipment": "1*40FR+1*20GP"}, {"id": "weld-01", "category": "welding", "categoryLabel": "Laser Welding", "series": "Handheld Welding", "model": "Smart HW1500S", "subtitle": "1.5KW Handheld Laser Welding System", "badge": "Standard", "specs": {"Laser Power": "1.5KW", "Laser Source": "Raycus CE", "Welding Head": "Suplaser", "Wire Feeder": "Suplaser", "Chiller": "S&A", "CNC": "/", "Consumables": "30pcs nozzles, 10pcs lens, 2 pair of protection glasses, 1 pc coil fo wire, 1 pc protecion helmet"}, "dealerPrice": 4500, "endPrice": 6500, "currency": "USD", "shipment": "Carton/Case"}, {"id": "weld-02", "category": "welding", "categoryLabel": "Laser Welding", "series": "Handheld Welding", "model": "Smart HW2000S", "subtitle": "2KW Handheld Laser Welding System", "badge": "Best Seller", "specs": {"Laser Power": "2KW", "Laser Source": "Raycus CE", "Welding Head": "Suplaser", "Wire Feeder": "Suplaser", "Chiller": "S&A", "CNC": "/", "Consumables": "30pcs nozzles, 10pcs lens, 2 pair of protection glasses, 1 pc coil fo wire, 1 pc protecion helmet"}, "dealerPrice": 5500, "endPrice": 9100, "currency": "USD", "shipment": "Carton/Case"}, {"id": "weld-03", "category": "welding", "categoryLabel": "Laser Welding", "series": "Handheld Welding", "model": "Smart HW3000S", "subtitle": "3KW Handheld Laser Welding System", "badge": "Best Seller", "specs": {"Laser Power": "3KW", "Laser Source": "Raycus CE", "Welding Head": "Suplaser", "Wire Feeder": "Suplaser", "Chiller": "S&A", "CNC": "/", "Consumables": "30pcs nozzles, 10pcs lens, 2 pair of protection glasses, 1 pc coil fo wire, 1 pc protecion helmet"}, "dealerPrice": 6500, "endPrice": 11000, "currency": "USD", "shipment": "Carton/Case"}, {"id": "weld-04", "category": "welding", "categoryLabel": "Laser Welding", "series": "Handheld Welding", "model": "Smart HW1500E", "subtitle": "1.5KW Handheld Laser Welding System", "badge": "Standard", "specs": {"Laser Power": "1.5KW", "Laser Source": "HGSTAR", "Welding Head": "Suplaser", "Wire Feeder": "Suplaser", "Chiller": "S&A", "CNC": "/", "Consumables": "30pcs nozzles, 10pcs lens, 2 pair of protection glasses, 1 pc coil fo wire, 1 pc protecion helmet"}, "dealerPrice": 4000, "endPrice": 5800, "currency": "USD", "shipment": "Carton/Case"}, {"id": "weld-05", "category": "welding", "categoryLabel": "Laser Welding", "series": "Handheld Welding", "model": "Smart HW2000E", "subtitle": "2KW Handheld Laser Welding System", "badge": "Value", "specs": {"Laser Power": "2KW", "Laser Source": "HGSTAR", "Welding Head": "Suplaser", "Wire Feeder": "Suplaser", "Chiller": "S&A", "CNC": "/", "Consumables": "30pcs nozzles, 10pcs lens, 2 pair of protection glasses, 1 pc coil fo wire, 1 pc protecion helmet"}, "dealerPrice": 5000, "endPrice": 7800, "currency": "USD", "shipment": "Carton/Case"}, {"id": "weld-06", "category": "welding", "categoryLabel": "Laser Welding", "series": "Handheld Welding", "model": "Smart HW3000E", "subtitle": "3KW Handheld Laser Welding System", "badge": "Value", "specs": {"Laser Power": "3KW", "Laser Source": "HGSTAR", "Welding Head": "Suplaser", "Wire Feeder": "Suplaser", "Chiller": "S&A", "CNC": "/", "Consumables": "30pcs nozzles, 10pcs lens, 2 pair of protection glasses, 1 pc coil fo wire, 1 pc protecion helmet"}, "dealerPrice": 6000, "endPrice": 9500, "currency": "USD", "shipment": "Carton/Case"}, {"id": "clean-08", "category": "cleaning", "categoryLabel": "Laser Cleaning", "series": "CW Cleaning", "model": "Smart HC-1500", "subtitle": "1.5w CW Laser Cleaning System", "badge": "Industrial Grade", "specs": {"Laser Power": "1.5w CW", "Laser Source": "Raycus CE", "Cleaning Head": "HGSTAR", "Chiller": "S&A", "Consumables": "2pcs protection lens, 2 pair of protection glasses"}, "dealerPrice": 7000, "endPrice": 9100, "currency": "USD", "shipment": "Carton/Case"}, {"id": "clean-09", "category": "cleaning", "categoryLabel": "Laser Cleaning", "series": "CW Cleaning", "model": "Smart HC-2000", "subtitle": "2kw CW Laser Cleaning System", "badge": "Industrial Grade", "specs": {"Laser Power": "2kw CW", "Laser Source": "Raycus CE", "Cleaning Head": "HGSTAR", "Chiller": "S&A", "Consumables": "2pcs protection lens, 2 pair of protection glasses"}, "dealerPrice": 9000, "endPrice": 11700, "currency": "USD", "shipment": "Carton/Case"}, {"id": "clean-11", "category": "cleaning", "categoryLabel": "Laser Cleaning", "series": "Pulse Cleaning", "model": "Smart HP-300", "subtitle": "300W pulsed Laser Cleaning System", "badge": "Industrial Grade", "specs": {"Laser Power": "300W pulsed", "Laser Source": "JPT", "Cleaning Head": "HGSTAR", "Chiller": "S&A", "Consumables": "2pcs protection lens, 2 pair of protection glasses"}, "dealerPrice": 5500, "endPrice": 7150, "currency": "USD", "shipment": "Carton/Case"}, {"id": "clean-12", "category": "cleaning", "categoryLabel": "Laser Cleaning", "series": "Pulse Cleaning", "model": "Smart HP-500", "subtitle": "500W pulsed Laser Cleaning System", "badge": "Industrial Grade", "specs": {"Laser Power": "500W pulsed", "Laser Source": "JPT", "Cleaning Head": "HGSTAR", "Chiller": "S&A", "Consumables": "2pcs protection lens, 2 pair of protection glasses"}, "dealerPrice": 7500, "endPrice": 9750, "currency": "USD", "shipment": "Carton/Case"}, {"id": "mark-13", "category": "marking", "categoryLabel": "Laser Marking", "series": "Desktop Marking", "model": "SMART HM-20F", "subtitle": "20w Fiber Laser Marking System", "badge": "Compact", "specs": {"Laser Power": "20w", "Software": "EZCAD", "Laser Source": "Raycus", "Marking Area": "110x110mm", "Warranty": "2 years"}, "dealerPrice": 2000, "endPrice": 2600, "currency": "USD", "shipment": "Carton/Case"}, {"id": "mark-14", "category": "marking", "categoryLabel": "Laser Marking", "series": "Desktop Marking", "model": "SMART HM-30F", "subtitle": "30w Fiber Laser Marking System", "badge": "Compact", "specs": {"Laser Power": "30w", "Software": "EZCAD", "Laser Source": "Raycus", "Marking Area": "110x110mm", "Warranty": ""}, "dealerPrice": 2500, "endPrice": 3250, "currency": "USD", "shipment": "Carton/Case"}, {"id": "mark-15", "category": "marking", "categoryLabel": "Laser Marking", "series": "Desktop Marking", "model": "SMART HM-50F", "subtitle": "50w Fiber Laser Marking System", "badge": "Compact", "specs": {"Laser Power": "50w", "Software": "EZCAD", "Laser Source": "Raycus", "Marking Area": "110x110mm", "Warranty": ""}, "dealerPrice": 3000, "endPrice": 3900, "currency": "USD", "shipment": "Carton/Case"}, {"id": "mark-16", "category": "marking", "categoryLabel": "Laser Marking", "series": "Handheld Marking", "model": "SMART HM-20F(handheld)", "subtitle": "20W Fiber Laser Marking System", "badge": "Portable", "specs": {"Laser Power": "20W", "Software": "HGSTAR", "Laser Source": "HGSTAR", "Marking Area": "50x50mm", "Warranty": "2 years"}, "dealerPrice": 2200, "endPrice": 2860, "currency": "USD", "shipment": "Carton/Case"}]};

function isValidCatalogProduct(p) {
  if (!p || !p.id || !p.model) return false;
  const sub = String(p.subtitle || '').toLowerCase();
  if (sub.includes('nan')) return false;
  if (!p.dealerPrice || p.dealerPrice <= 1) return false;
  if (p.endPrice == null || p.endPrice <= 1) return false;
  const lp = p.specs && String(p.specs['Laser Power'] || '').toLowerCase();
  if (lp === 'nan' || lp === '') return false;
  return true;
}

const products = PRODUCT_DATA.products.filter(isValidCatalogProduct);

let lastModalTrigger = null;

// ========================================
// Scroll Reveal
// ========================================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ========================================
// Header Scroll Effect
// ========================================
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 50) {
          header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        } else {
          header.style.boxShadow = 'none';
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ========================================
// Product Card Rendering
// ========================================
function getCategoryImage(category) {
  const images = {
    cutting: 'img/machines/PlateCutting.webp',
    tube: 'img/machines/PipeCutting.webp',
    combo: 'img/machines/Combine.webp',
    welding: 'img/machines/welding.webp',
    cleaning: 'img/machines/Cleaning.webp',
    marking: 'img/machines/marking.webp'
  };
  return images[category] || images.cutting;
}


function initPremiumProductSlider() {
  const bannerEl = document.getElementById('premiumBanner');
  const categoryEl = document.getElementById('premiumSliderCategory');
  const infoPanelEl = document.querySelector('.premium-info');
  const infoTitleEl = document.getElementById('premiumInfoTitle');
  const infoTextEl = document.getElementById('premiumInfoText');
  const rightTopEl = document.getElementById('premiumRightTop');
  const rightMetricEl = document.getElementById('premiumRightMetric');
  const rightBadgeEl = document.getElementById('premiumRightBadge');
  const linkEl = document.getElementById('premiumCenterLink');
  const prevBtn = document.getElementById('premiumSliderPrev');
  const nextBtn = document.getElementById('premiumSliderNext');
  const dots = Array.from(document.querySelectorAll('.premium-dot'));
  if (!bannerEl || !categoryEl || !infoPanelEl || !infoTitleEl || !infoTextEl || !rightTopEl || !rightMetricEl || !rightBadgeEl || !linkEl || !prevBtn || !nextBtn) return;

  const slides = [
    {
      categoryKey: 'premiumSlider.plateCutting.category',
      image: 'img/machines/PlateCutting.webp',
      href: 'plate-cutting.html',
      infoTitleKey: 'premiumSlider.plateCutting.infoTitle',
      infoTextKey: 'premiumSlider.plateCutting.infoText',
      rightTopKey: 'premiumSlider.overviewLabel',
      rightMetricKey: 'premiumSlider.plateCutting.metric',
      rightBadgeKey: 'premiumSlider.plateCutting.badge'
    },
    {
      categoryKey: 'premiumSlider.tubeCutting.category',
      image: 'img/machines/PipeCutting.webp',
      href: 'tube-cutting.html',
      infoTitleKey: 'premiumSlider.tubeCutting.infoTitle',
      infoTextKey: 'premiumSlider.tubeCutting.infoText',
      rightTopKey: 'premiumSlider.overviewLabel',
      rightMetricKey: 'premiumSlider.tubeCutting.metric',
      rightBadgeKey: 'premiumSlider.tubeCutting.badge'
    },
    {
      categoryKey: 'premiumSlider.combined.category',
      image: 'img/machines/Combine.webp',
      href: 'combined-machines.html',
      infoTitleKey: 'premiumSlider.combined.infoTitle',
      infoTextKey: 'premiumSlider.combined.infoText',
      rightTopKey: 'premiumSlider.overviewLabel',
      rightMetricKey: 'premiumSlider.combined.metric',
      rightBadgeKey: 'premiumSlider.combined.badge'
    },
    {
      categoryKey: 'premiumSlider.welding.category',
      image: 'img/machines/welding.webp',
      href: 'laser-welding.html',
      infoTitleKey: 'premiumSlider.welding.infoTitle',
      infoTextKey: 'premiumSlider.welding.infoText',
      rightTopKey: 'premiumSlider.overviewLabel',
      rightMetricKey: 'premiumSlider.welding.metric',
      rightBadgeKey: 'premiumSlider.welding.badge'
    },
    {
      categoryKey: 'premiumSlider.cleaning.category',
      image: 'img/machines/Cleaning.webp',
      href: 'laser-cleaning.html',
      infoTitleKey: 'premiumSlider.cleaning.infoTitle',
      infoTextKey: 'premiumSlider.cleaning.infoText',
      rightTopKey: 'premiumSlider.overviewLabel',
      rightMetricKey: 'premiumSlider.cleaning.metric',
      rightBadgeKey: 'premiumSlider.cleaning.badge'
    },
    {
      categoryKey: 'premiumSlider.marking.category',
      image: 'img/machines/marking.webp',
      href: 'laser-marking.html',
      infoTitleKey: 'premiumSlider.marking.infoTitle',
      infoTextKey: 'premiumSlider.marking.infoText',
      rightTopKey: 'premiumSlider.overviewLabel',
      rightMetricKey: 'premiumSlider.marking.metric',
      rightBadgeKey: 'premiumSlider.marking.badge'
    }
  ];

  let index = 0;
  let popTimeout = null;
  let autoTimer = null;

  function applyPop() {
    [categoryEl, infoTitleEl, infoTextEl, rightTopEl, rightMetricEl, rightBadgeEl].forEach((el) => {
      el.classList.remove('premium-pop');
      void el.offsetWidth;
      el.classList.add('premium-pop');
    });
    if (popTimeout) clearTimeout(popTimeout);
    popTimeout = setTimeout(() => {
      [categoryEl, infoTitleEl, infoTextEl, rightTopEl, rightMetricEl, rightBadgeEl].forEach((el) => el.classList.remove('premium-pop'));
    }, 500);
  }

  function updateDots(i) {
    if (!dots.length) return;
    dots.forEach((dot, idx) => dot.classList.toggle('is-active', idx === i));
  }

  function render(i) {
    const slide = slides[i];
    const t = (key, fallback) => (typeof getTranslation === 'function' ? getTranslation(key, fallback) : fallback) || fallback;
    categoryEl.textContent = t(slide.categoryKey, slide.categoryKey);
    infoTitleEl.textContent = t(slide.infoTitleKey, slide.infoTitleKey);
    infoTextEl.textContent = t(slide.infoTextKey, slide.infoTextKey);
    rightTopEl.textContent = t(slide.rightTopKey, 'CATEGORY OVERVIEW');
    rightMetricEl.textContent = t(slide.rightMetricKey, slide.rightMetricKey);
    rightBadgeEl.textContent = t(slide.rightBadgeKey, slide.rightBadgeKey);
    linkEl.href = slide.href;
    linkEl.setAttribute('aria-label', t(slide.categoryKey, ''));
    infoPanelEl.classList.remove('is-visible');
    linkEl.classList.remove('is-ready');
    void linkEl.offsetWidth;
    linkEl.style.backgroundImage = `url('${encodeURI(slide.image)}')`;
    requestAnimationFrame(() => linkEl.classList.add('is-ready'));
    setTimeout(() => {
      infoPanelEl.classList.add('is-visible');
    }, 1100);
    updateDots(i);
    applyPop();
  }

  function goTo(nextIndex) {
    index = ((nextIndex % slides.length) + slides.length) % slides.length;
    render(index);
  }

  function startAuto() {
    if (autoTimer) return;
    autoTimer = setInterval(() => {
      goTo(index + 1);
    }, 3000);
  }

  function stopAuto() {
    if (!autoTimer) return;
    clearInterval(autoTimer);
    autoTimer = null;
  }

  prevBtn.addEventListener('click', () => {
    goTo(index - 1);
  });

  nextBtn.addEventListener('click', () => {
    goTo(index + 1);
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const nextIndex = Number(dot.getAttribute('data-premium-dot'));
      if (Number.isNaN(nextIndex)) return;
      goTo(nextIndex);
    });
  });

  bannerEl.addEventListener('mouseenter', stopAuto);
  bannerEl.addEventListener('mouseleave', startAuto);
  bannerEl.addEventListener('focusin', stopAuto);
  bannerEl.addEventListener('focusout', startAuto);

  render(index);
  startAuto();

  document.addEventListener('hgstar-lang', () => { render(index); });
}

function formatPrice(price, currency) {
  if (!price || price <= 1) return (typeof getTranslation === 'function' ? getTranslation('quoteOnRequest', 'Quote on Request') : 'Quote on Request');
  const symbol = currency === 'EUR' ? '€' : '$';
  return `${symbol}${price.toLocaleString()}`;
}

function getBadgeClass(badge) {
  if (badge.includes('Best')) return 'badge-best';
  if (badge.includes('Entry')) return 'badge-entry';
  if (badge.includes('Heavy') || badge.includes('High Power')) return 'badge-heavy';
  if (badge.includes('Premium')) return 'badge-premium';
  return '';
}

function translateSpecLabel(englishLabel) {
  if (currentLanguage === 'de' && translations.de?.products?.specLabels) {
    return translations.de.products.specLabels[englishLabel] || englishLabel;
  }
  return englishLabel;
}

function translateCategoryLabel(categoryLabel) {
  const categoryMap = {
    'Plate Cutting': 'products.categoryLabels.plate',
    'Pipe Cutting': 'products.categoryLabels.pipe',
    'Tube Cutting': 'products.categoryLabels.pipe',
    'Combination Machines': 'products.categoryLabels.combination',
    'Combined Machines': 'products.categoryLabels.combination',
    'Laser Welding': 'products.categoryLabels.welding',
    'Laser Cleaning': 'products.categoryLabels.cleaning',
    'Laser Marking': 'products.categoryLabels.marking'
  };
  
  const translationKey = categoryMap[categoryLabel];
  if (translationKey && translations && translations[currentLanguage]) {
    const keys = translationKey.split('.');
    let value = translations[currentLanguage];
    for (const key of keys) {
      value = value[key];
      if (!value) return categoryLabel;
    }
    return value;
  }
  return categoryLabel;
}

function translateSubtitle(subtitle) {
  if (currentLanguage === 'en' || !subtitle) return subtitle;
  
  // Translate common subtitle patterns
  let translated = subtitle;
  
  // Translate "Fiber Laser"
  translated = translated.replace(/Fiber Laser/g, 'Faserlaser');
  
  // Translate power ratings
  translated = translated.replace(/KW/g, 'kW');
  
  // Translate dimensions and work areas
  translated = translated.replace(/Work Area/g, 'Arbeitsfläche');
  translated = translated.replace(/Work area/g, 'Arbeitsfläche');
  translated = translated.replace(/m Work Area/g, 'm Arbeitsfläche');
  translated = translated.replace(/m work area/g, 'm Arbeitsfläche');
  
  // Translate tube/pipe references
  translated = translated.replace(/Tube:/g, 'Rohr:');
  translated = translated.replace(/tube:/g, 'rohr:');
  translated = translated.replace(/Pipe:/g, 'Rohr:');
  translated = translated.replace(/pipe:/g, 'rohr:');
  
  // Translate tube sizes
  translated = translated.replace(/Round/g, 'Rund');
  translated = translated.replace(/Square/g, 'Quadrat');
  translated = translated.replace(/Rectangular/g, 'Rechteckig');
  translated = translated.replace(/Rect/g, 'Rechteck');
  translated = translated.replace(/Oval/g, 'Oval');
  
  // Translate diameters
  translated = translated.replace(/diameters/g, 'Durchmesser');
  translated = translated.replace(/Diameters/g, 'Durchmesser');
  translated = translated.replace(/diameter/g, 'Durchmesser');
  translated = translated.replace(/Diameter/g, 'Durchmesser');
  
  // Translate common measurement terms
  translated = translated.replace(/mm/g, 'mm');
  translated = translated.replace(/up to/g, 'bis zu');
  translated = translated.replace(/Up to/g, 'Bis zu');
  
  // Translate "from"
  translated = translated.replace(/from /g, 'von ');
  translated = translated.replace(/From /g, 'Von ');
  
  // Translate system descriptions
  translated = translated.replace(/Handheld Laser Welding System/g, 'Handgeführtes Laserschweißsystem');
  translated = translated.replace(/pulsed Laser Cleaning System/gi, 'Gepulstes Lasereinigungssystem');
  translated = translated.replace(/Laser Marking System/g, 'Laser-Markierungssystem');
  translated = translated.replace(/Laser Cleaning System/g, 'Lasereinigungssystem');
  translated = translated.replace(/Laser Welding System/g, 'Laserschweißsystem');
  translated = translated.replace(/Handheld/g, 'Handgeführt');
  translated = translated.replace(/handheld/g, 'handgeführt');
  translated = translated.replace(/pulsed/gi, 'Gepulst');
  translated = translated.replace(/Plate/g, 'Blech');
  translated = translated.replace(/plate/g, 'blech');
  
  return translated;
}

function translateBadge(badge) {
  if (currentLanguage === 'en' || !badge) return badge;
  
  const badgeMap = {
    // English to German translations
    'Entry Level': 'Einstiegsniveau',
    'Entry': 'Einstieg',
    'Value': 'Gutes Preis-Leistungs-Verhältnis',
    'Professional': 'Professionell',
    'Best Seller': 'Bestseller',
    'Most Sold': 'Meistverkauft',
    'Popular': 'Beliebt',
    'Heavy Duty': 'Hochleistung',
    'Handheld': 'Handgerät',
    'Large Format': 'Großformat',
    'Ultra Power': 'Ultra-Leistung',
    // German badges (keep as-is when already German)
    'Handgerät': 'Handgerät',
    'Meistverkauft': 'Meistverkauft',
    'Hochleistung': 'Hochleistung',
    'Großformat': 'Großformat',
    'Einstieg': 'Einstieg',
    'XL-Format': 'XL-Format'
  };
  
  return badgeMap[badge] || badge;
}

function getCategoryPageUrl(category) {
  const map = {
    cutting: 'plate-cutting.html',
    tube: 'tube-cutting.html',
    combo: 'combined-machines.html',
    welding: 'laser-welding.html',
    cleaning: 'laser-cleaning.html',
    marking: 'laser-marking.html'
  };
  return map[category] || 'plate-cutting.html';
}

function parseLaserPowerKw(product) {
  const raw = product.specs && product.specs['Laser Power'];
  if (raw == null || String(raw).toLowerCase() === 'nan') return null;
  const s = String(raw).toLowerCase();
  const num = parseFloat(String(raw).replace(/[^0-9.]/g, ''));
  if (Number.isNaN(num)) return null;
  if (s.includes('kw')) return num;
  if (s.includes('w') && !s.includes('kw')) {
    if (s.includes('cw') && num < 50) return num;
    return num >= 500 ? num / 1000 : num / 1000;
  }
  return num;
}

function pickHighlightSpecs(product, max = 3) {
  const specs = product.specs || {};
  const order = ['Laser Power', 'Work Area', 'Tube Diameter', 'Marking Area', 'Exchange Table', 'Max Loading Length', 'Laser Source', 'Cutting Head'];
  const out = [];
  for (const key of order) {
    if (out.length >= max) break;
    const v = specs[key];
    if (v != null && String(v).trim() && String(v).toLowerCase() !== 'nan') {
      out.push([key, v]);
    }
  }
  return out;
}

function getApplicationTag(product) {
  const key = `products.applicationTags.${product.category}`;
  return getTranslation(key, translateCategoryLabel(product.categoryLabel));
}

function renderProductCard(product) {
  const highlights = pickHighlightSpecs(product, 3);
  const img = getCategoryImage(product.category);
  const priceLabel = SHOW_LIST_PRICES
    ? formatPrice(product.dealerPrice, product.currency)
    : getTranslation('modal.quoteOnRequest', 'Quote on request');
  const fromPrefix = SHOW_LIST_PRICES && priceLabel !== 'Quote on Request'
    ? `<span class="product-card-price-prefix">${getTranslation('modal.from', 'From')}</span>`
    : '';
  const catUrl = getCategoryPageUrl(product.category);
  const quoteHref = `contact.html?model=${encodeURIComponent(product.model)}`;

  return `
    <article class="product-card" data-id="${product.id}" tabindex="0" role="group" aria-label="${product.model}">
      <div class="product-card-header">
        <img src="${img}" alt="${product.model} — ${translateCategoryLabel(product.categoryLabel)}" loading="lazy">
        ${product.badge ? `<span class="product-card-badge ${getBadgeClass(product.badge)}">${translateBadge(product.badge)}</span>` : ''}
      </div>
      <div class="product-card-body">
        <div class="product-card-category">${translateCategoryLabel(product.categoryLabel)}</div>
        <h3 class="product-card-title">${product.model}</h3>
        <p class="product-card-subtitle">${translateSubtitle(product.subtitle)}</p>
        <p class="product-card-application">${getApplicationTag(product)}</p>
        <div class="product-card-specs product-card-specs-compact">
          ${highlights.map(([key, val]) => `
            <div class="spec-item">
              <span class="spec-label">${translateSpecLabel(key)}</span>
              <span class="spec-value">${val}</span>
            </div>
          `).join('')}
          <div class="spec-item spec-item--price">
            <span class="spec-label">${getTranslation('modal.dealerPrice', 'Dealer Price')}</span>
            <span class="spec-value spec-value--price">${formatPrice(product.dealerPrice, product.currency)}</span>
          </div>
        </div>
        <div class="product-card-footer product-card-footer-b2b">
          <div class="product-card-price">
            ${fromPrefix}
            <strong>${priceLabel}</strong>
          </div>
          <div class="product-card-actions">
            <button type="button" class="product-card-linkbtn" data-open-specs="${product.id}">${getTranslation('modal.viewSpecs', 'View specs')}</button>
            <a href="${quoteHref}" class="product-card-linkbtn primary">${getTranslation('modal.requestQuoteShort', 'Request quote')}</a>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(containerId, productList) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const seriesOrder = [];
  const seriesGroups = {};
  productList.forEach(p => {
    const s = p.series || '';
    if (!seriesGroups[s]) { seriesGroups[s] = []; seriesOrder.push(s); }
    seriesGroups[s].push(p);
  });

  if (seriesOrder.length > 1) {
    let html = '';
    seriesOrder.forEach(series => {
      const count = seriesGroups[series].length;
      html += `<div class="series-group-header"><span class="series-group-label">${series}</span><span class="series-group-count">${count} model${count !== 1 ? 's' : ''}</span></div>`;
      html += seriesGroups[series].map(renderProductCard).join('');
    });
    container.innerHTML = html;
  } else {
    container.innerHTML = productList.map(renderProductCard).join('');
  }
  initProductCards();
}

// ========================================
// Product Modal
// ========================================
function initProductCards() {
  document.querySelectorAll('.product-card').forEach(card => {
    const id = card.dataset.id;
    card.querySelectorAll('[data-open-specs]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(id, btn);
      });
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.closest('a, button')) return;
        e.preventDefault();
        openModal(id, card);
      }
    });
  });
}

function openModal(productId, triggerEl) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const overlay = document.getElementById('productModal');
  const body = document.getElementById('modalBody');
  if (!overlay || !body) return;

  lastModalTrigger = triggerEl || document.activeElement;

  const specs = product.specs || {};
  const specEntries = Object.entries(specs);
  const img = getCategoryImage(product.category);
  const dealerPrice = formatPrice(product.dealerPrice, product.currency);
  const endPrice = formatPrice(product.endPrice, product.currency);
  const priceBlock = SHOW_LIST_PRICES ? `
        <div class="modal-price-row">
          <div class="modal-price">
            <div class="modal-price-label">${getTranslation('modal.dealerPrice', 'Dealer Price (FOB)')}</div>
            <div class="modal-price-value">${dealerPrice}</div>
          </div>
          ${endPrice !== 'Quote on Request' ? `
          <div class="modal-price">
            <div class="modal-price-label">${getTranslation('modal.endCustomerPrice', 'End Customer Price')}</div>
            <div class="modal-price-value red">${endPrice}</div>
          </div>` : ''}
        </div>` : `
        <div class="modal-quote-block">
          <div class="modal-price-label">${getTranslation('modal.quoteOnRequest', 'Quote on request')}</div>
          <p class="modal-pricing-note">${getTranslation('modal.pricingNote', 'Pricing is quotation-based. Request a formal offer for your configuration and destination.')}</p>
        </div>`;

  document.getElementById('modalTitle').textContent = product.model;

  body.innerHTML = `
    <div class="modal-grid">
      <div>
        <div class="modal-img">
          <img src="${img}" alt="${product.model} — ${translateCategoryLabel(product.categoryLabel)}">
        </div>
        <div class="modal-side-meta">
          <div class="modal-meta-block">
            <div class="modal-price-label">${getTranslation('modal.configurationSummary', 'Configuration')}</div>
            <p class="modal-meta-text">${translateSubtitle(product.subtitle)}</p>
          </div>
          ${priceBlock}
          <div class="modal-meta-block">
            <div class="modal-price-label">${getTranslation('modal.leadTime', 'Typical lead time')}</div>
            <p class="modal-meta-text">${getTranslation('modal.leadTimeValue', '30–45 days (confirmed in quotation)')}</p>
          </div>
        </div>
        <a href="contact.html?model=${encodeURIComponent(product.model)}" class="btn btn-primary btn-lg" style="width:100%;margin-top:16px">
          ${getTranslation('modal.requestQuote', 'Request Quote for This Machine')}
        </a>
      </div>
      <div>
        <p class="modal-intro">${translateCategoryLabel(product.categoryLabel)} · ${getApplicationTag(product)}</p>
        <div class="modal-specs-list">
          ${specEntries.map(([key, val]) => `
            <div class="modal-spec-item">
              <div class="modal-spec-label">${translateSpecLabel(key)}</div>
              <div class="modal-spec-value">${val}</div>
            </div>
          `).join('')}
        </div>
        ${product.shipment ? `
        <div class="modal-shipment-block">
          <div class="modal-spec-label">${translateSpecLabel('Shipment')}</div>
          <div class="modal-spec-value modal-shipment-text">${product.shipment}</div>
        </div>` : ''}
        <div class="modal-warranty-block">
          <div class="modal-warranty-title">${getTranslation('modal.standardWarranty', 'Warranty policy')}</div>
          <div class="modal-warranty-text">${getTranslation('modal.warrantyDescription', '')}</div>
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  const closeBtn = document.querySelector('#productModal .modal-close');
  if (closeBtn) closeBtn.focus();
}

function closeModal() {
  const overlay = document.getElementById('productModal');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  if (lastModalTrigger && typeof lastModalTrigger.focus === 'function') {
    lastModalTrigger.focus();
  }
  lastModalTrigger = null;
}

function initModal() {
  const overlay = document.getElementById('productModal');
  if (!overlay) return;

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (overlay.classList.contains('active')) {
      e.preventDefault();
      closeModal();
    }
  });
}

// ========================================
// Catalog Initialisation
// ========================================
function initCatalog() {
  const container = document.getElementById('productsContainer');
  if (!container) return;

  const pageCategory = document.body.dataset.category || 'all';
  const plateCuttingWhitelist = ['plate-01', 'plate-02', 'plate-03', 'plate-04', 'plate-05', 'plate-07', 'plate-08', 'plate-09', 'plate-14', 'plate-17', 'plate-18', 'plate-23', 'plate-27', 'plate-29', 'plate-33'];
  const tubeCuttingWhitelist = ['tube-36', 'tube-38', 'tube-39', 'tube-46', 'tube-47', 'tube-54'];
  const comboMachinesWhitelist = ['combo-65', 'combo-66', 'combo-69', 'combo-76', 'combo-82'];
  const weldingWhitelist = ['weld-01', 'weld-02', 'weld-03', 'weld-04', 'weld-06'];
  const cleaningWhitelist = ['clean-08', 'clean-09', 'clean-11', 'clean-12'];
  const markingWhitelist = ['mark-13', 'mark-14', 'mark-15', 'mark-16'];

  // Build the base product list for this page (category + whitelist)
  let baseProducts = [...products];
  if (pageCategory !== 'all') {
    baseProducts = baseProducts.filter(p => p.category === pageCategory);
    if (pageCategory === 'cutting') baseProducts = baseProducts.filter(p => plateCuttingWhitelist.includes(p.id));
    else if (pageCategory === 'tube') baseProducts = baseProducts.filter(p => tubeCuttingWhitelist.includes(p.id));
    else if (pageCategory === 'combo') baseProducts = baseProducts.filter(p => comboMachinesWhitelist.includes(p.id));
    else if (pageCategory === 'welding') baseProducts = baseProducts.filter(p => weldingWhitelist.includes(p.id));
    else if (pageCategory === 'cleaning') baseProducts = baseProducts.filter(p => cleaningWhitelist.includes(p.id));
    else if (pageCategory === 'marking') baseProducts = baseProducts.filter(p => markingWhitelist.includes(p.id));
  }

  let currentSeries = 'all';
  let currentSpecKey = '';
  let currentSpecVal = '';
  let currentSearch = '';

  function applyFilters() {
    let filtered = [...baseProducts];

    if (currentSeries !== 'all') {
      filtered = filtered.filter(p => p.series === currentSeries);
    }
    if (currentSpecKey && currentSpecVal) {
      filtered = filtered.filter(p => {
        const v = p.specs && p.specs[currentSpecKey];
        return v != null && String(v).trim() === currentSpecVal;
      });
    }
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      filtered = filtered.filter(p =>
        p.model.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        (p.specs && Object.values(p.specs).some(v => String(v).toLowerCase().includes(q)))
      );
    }

    renderProducts('productsContainer', filtered);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:60px 20px">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--text-muted);margin:0 auto 16px;display:block">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <h3 style="font-family:var(--font-body);font-size:1.125rem;margin-bottom:8px">No machines found</h3>
          <p style="color:var(--text-muted);font-size:0.875rem">Try adjusting your search or filter criteria</p>
        </div>
      `;
    }
  }

  // Wire up series/spec chip buttons
  const chips = document.querySelectorAll('.filter-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentSeries = chip.dataset.series || 'all';
      currentSpecKey = chip.dataset.specKey || '';
      currentSpecVal = chip.dataset.specVal || '';
      applyFilters();
    });
  });

  // Wire up search input
  const searchInput = document.getElementById('productSearch');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      currentSearch = e.target.value;
      applyFilters();
    });
  }

  // Initial render
  applyFilters();
}

function maxWorkAreaMeters(product) {
  const wa = product.specs && product.specs['Work Area'];
  if (!wa || String(wa).toLowerCase() === 'nan') return null;
  const m = String(wa).match(/(\d+\.?\d*)\s*[*x×]\s*(\d+\.?\d*)/i);
  if (!m) return null;
  return Math.max(parseFloat(m[1]), parseFloat(m[2]));
}

function exchangeTableYes(product) {
  const v = product.specs && product.specs['Exchange Table'];
  if (v == null) return null;
  const s = String(v).toLowerCase();
  if (s === 'yes' || s === 'y') return true;
  if (s === 'no' || s === 'nan' || s === '') return false;
  return s.includes('yes');
}

function _REMOVE_initFilter() {
  const chips = document.querySelectorAll('.filter-chip');
  const searchInput = document.getElementById('productSearch');
  const container = document.getElementById('productsContainer');
  if (!container) return;

  let currentCategory = 'all';
  let currentSearch = '';
  let powerRange = 'all';
  let exchangeFilter = 'all';
  let workAreaFilter = 'all';

  // Get current page category from body data attribute
  const pageCategory = document.body.dataset.category || 'all';

  const filterBar = document.querySelector('.filter-bar .container');
  if (filterBar && !document.getElementById('filterPowerRange')) {
    const showExchange = pageCategory === 'cutting' || pageCategory === 'combo';
    const showWorkArea = pageCategory === 'cutting' || pageCategory === 'combo';
    const row = document.createElement('div');
    row.className = 'filter-advanced';
    row.innerHTML = `
      <div class="filter-advanced-head">
        <span class="filter-advanced-title" data-i18n-key="filters.refineTitle">${getTranslation('filters.refineTitle', 'Specification filters')}</span>
        <span class="filter-advanced-hint" data-i18n-key="filters.refineHint">${getTranslation('filters.refineHint', 'Combine with search to narrow the catalog.')}</span>
      </div>
      <div class="filter-advanced-grid">
        <div class="filter-field">
          <label class="filter-field-label" for="filterPowerRange" data-i18n-key="filters.powerLabel">${getTranslation('filters.powerLabel', 'Laser power')}</label>
          <select id="filterPowerRange" class="filter-select" aria-label="${getTranslation('filters.powerLabel', 'Laser power')}">
            <option value="all">${getTranslation('filters.powerAll', 'All powers')}</option>
            <option value="lt6">${getTranslation('filters.powerUnder6', 'Under 6 kW')}</option>
            <option value="6to12">${getTranslation('filters.power6to12', '6 kW to under 12 kW')}</option>
            <option value="gte12">${getTranslation('filters.power12plus', '12 kW and above')}</option>
          </select>
        </div>
        ${showExchange ? `
        <div class="filter-field">
          <label class="filter-field-label" for="filterExchange" data-i18n-key="filters.exchangeLabel">${getTranslation('filters.exchangeLabel', 'Table automation')}</label>
          <select id="filterExchange" class="filter-select" aria-label="${getTranslation('filters.exchangeLabel', 'Table automation')}">
            <option value="all">${getTranslation('filters.exchangeAll', 'All configurations')}</option>
            <option value="yes">${getTranslation('filters.exchangeYes', 'Exchange table')}</option>
            <option value="no">${getTranslation('filters.exchangeNo', 'Single table / no exchange')}</option>
          </select>
        </div>` : ''}
        ${showWorkArea ? `
        <div class="filter-field">
          <label class="filter-field-label" for="filterWorkArea" data-i18n-key="filters.workAreaLabel">${getTranslation('filters.workAreaLabel', 'Work area')}</label>
          <select id="filterWorkArea" class="filter-select" aria-label="${getTranslation('filters.workAreaLabel', 'Work area')}">
            <option value="all">${getTranslation('filters.workAreaAll', 'All formats')}</option>
            <option value="up4015">${getTranslation('filters.workArea4015', 'Up to ~4 × 1.5 m class')}</option>
            <option value="large">${getTranslation('filters.workAreaLarge', 'Large format (6 m and above)')}</option>
          </select>
        </div>` : ''}
      </div>
    `;
    filterBar.appendChild(row);
    document.getElementById('filterPowerRange').addEventListener('change', (e) => {
      powerRange = e.target.value;
      filter();
    });
    const exSel = document.getElementById('filterExchange');
    if (exSel) {
      exSel.addEventListener('change', (e) => {
        exchangeFilter = e.target.value;
        filter();
      });
    }
    const waSel = document.getElementById('filterWorkArea');
    if (waSel) {
      waSel.addEventListener('change', (e) => {
        workAreaFilter = e.target.value;
        filter();
      });
    }
  }

  // Whitelist of products to display on specific pages
  const plateCuttingWhitelist = ['plate-01', 'plate-02', 'plate-03', 'plate-04', 'plate-05', 'plate-07', 'plate-08', 'plate-09', 'plate-14', 'plate-17', 'plate-18', 'plate-23', 'plate-27', 'plate-29', 'plate-33'];
  const tubeCuttingWhitelist = ['tube-36', 'tube-38', 'tube-39', 'tube-46', 'tube-47', 'tube-54'];
  const comboMachinesWhitelist = ['combo-65', 'combo-66', 'combo-69', 'combo-76', 'combo-82'];
  const weldingWhitelist = ['weld-01', 'weld-02', 'weld-03', 'weld-04', 'weld-06'];
  const cleaningWhitelist = ['clean-08', 'clean-09', 'clean-11', 'clean-12'];
  const markingWhitelist = ['mark-13', 'mark-14', 'mark-15', 'mark-16'];

  function filter() {
    let filtered = [...products];

    // Filter by page category first
    if (pageCategory !== 'all') {
      filtered = filtered.filter(p => p.category === pageCategory);
      // Apply whitelist for specific categories
      if (pageCategory === 'cutting') {
        filtered = filtered.filter(p => plateCuttingWhitelist.includes(p.id));
      } else if (pageCategory === 'tube') {
        filtered = filtered.filter(p => tubeCuttingWhitelist.includes(p.id));
      } else if (pageCategory === 'combo') {
        filtered = filtered.filter(p => comboMachinesWhitelist.includes(p.id));
      } else if (pageCategory === 'welding') {
        filtered = filtered.filter(p => weldingWhitelist.includes(p.id));
      } else if (pageCategory === 'cleaning') {
        filtered = filtered.filter(p => cleaningWhitelist.includes(p.id));
      } else if (pageCategory === 'marking') {
        filtered = filtered.filter(p => markingWhitelist.includes(p.id));
      }
    }

    // Then filter by chip
    if (currentCategory !== 'all') {
      filtered = filtered.filter(p => p.category === currentCategory);
    }

    // Then search
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      filtered = filtered.filter(p =>
        p.model.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        (p.specs && Object.values(p.specs).some(v => String(v).toLowerCase().includes(q)))
      );
    }

    if (powerRange !== 'all') {
      filtered = filtered.filter(p => {
        const kw = parseLaserPowerKw(p);
        if (kw == null) return false;
        if (powerRange === 'lt6') return kw < 6;
        if (powerRange === '6to12') return kw >= 6 && kw < 12;
        if (powerRange === 'gte12') return kw >= 12;
        return true;
      });
    }

    if (exchangeFilter !== 'all' && (pageCategory === 'cutting' || pageCategory === 'combo')) {
      filtered = filtered.filter(p => {
        const y = exchangeTableYes(p);
        if (y === null) return false;
        return exchangeFilter === 'yes' ? y : !y;
      });
    }

    if (workAreaFilter !== 'all' && (pageCategory === 'cutting' || pageCategory === 'combo')) {
      filtered = filtered.filter(p => {
        const m = maxWorkAreaMeters(p);
        if (m == null) return false;
        if (workAreaFilter === 'up4015') return m <= 4.2;
        if (workAreaFilter === 'large') return m >= 6;
        return true;
      });
    }

    renderProducts('productsContainer', filtered);

    // Show empty state
    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:60px 20px">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--text-muted);margin:0 auto 16px">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <h3 style="font-family:var(--font-body);font-size:1.125rem;margin-bottom:8px">No machines found</h3>
          <p style="color:var(--text-muted);font-size:0.875rem">Try adjusting your search or filter criteria</p>
        </div>
      `;
    }
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentCategory = chip.dataset.category;
      filter();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      filter();
    });
  }

  // Initial render
  filter();
}

function updateAdvancedFilterLabels() {
  document.querySelectorAll('.filter-advanced-title[data-i18n-key], .filter-advanced-hint[data-i18n-key], .filter-field-label[data-i18n-key]').forEach((el) => {
    const key = el.getAttribute('data-i18n-key');
    if (key) el.textContent = getTranslation(key, el.textContent);
  });
  const p = document.getElementById('filterPowerRange');
  if (p && p.options.length >= 4) {
    const keys = ['filters.powerAll', 'filters.powerUnder6', 'filters.power6to12', 'filters.power12plus'];
    [...p.options].forEach((opt, i) => {
      if (keys[i]) opt.textContent = getTranslation(keys[i], opt.textContent);
    });
  }
  const ex = document.getElementById('filterExchange');
  if (ex && ex.options.length >= 3) {
    const keys = ['filters.exchangeAll', 'filters.exchangeYes', 'filters.exchangeNo'];
    [...ex.options].forEach((opt, i) => {
      if (keys[i]) opt.textContent = getTranslation(keys[i], opt.textContent);
    });
  }
  const wa = document.getElementById('filterWorkArea');
  if (wa && wa.options.length >= 3) {
    const keys = ['filters.workAreaAll', 'filters.workArea4015', 'filters.workAreaLarge'];
    [...wa.options].forEach((opt, i) => {
      if (keys[i]) opt.textContent = getTranslation(keys[i], opt.textContent);
    });
  }
}

document.addEventListener('hgstar-lang', () => {
  updateAdvancedFilterLabels();
  const container = document.getElementById('productsContainer');
  if (container && container.querySelector('.product-card')) {
    const currentFiltered = Array.from(container.querySelectorAll('.product-card[data-id]')).map((el) =>
      products.find((p) => p.id === el.dataset.id)
    ).filter(Boolean);
    if (currentFiltered.length > 0) {
      renderProducts('productsContainer', currentFiltered);
    }
  }
});

// ========================================
// Initialize FAQ Module
// ========================================
const FAQModule = (() => {
  function init() {
    document.querySelectorAll('.faq-question').forEach(btn => {
      const answerId = btn.getAttribute('aria-controls');
      const answer = document.getElementById(answerId);
      if (!answer) return;
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        answer.hidden = expanded;
      });
    });
  }
  return { init };
})();

// ========================================
// Initialize Everything
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  loadTranslations().then(() => {
    initLanguage();
    initPremiumProductSlider();
  });
  initTheme();
  initMobileNav();
  initScrollReveal();
  initHeaderScroll();
  initModal();
  initCatalog();
  FAQModule.init();
});

// Expose globals (theme / language live in theme.js + i18n.js)
window.closeModal = closeModal;
window.openModal = openModal;
