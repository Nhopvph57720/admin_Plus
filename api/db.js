// db.js
const mockData = {
  '09/11/2025': { totalRevenue: 35000, invoiceCount: 1, itemCount: 1 },
  '08/11/2025': { totalRevenue: 120000, invoiceCount: 3, itemCount: 5 },
  '07/11/2025': { totalRevenue: 85000, invoiceCount: 2, itemCount: 4 },
};

export const getRevenueByDate = (dateStr) => mockData[dateStr] || null;

export const getRevenueByRange = (startStr, endStr) => {
  const parseDate = (str) => {
    const [day, month, year] = str.split('/').map(Number);
    return new Date(year, month - 1, day);
  };

  const start = parseDate(startStr);
  const end = parseDate(endStr);
  let totalRevenue = 0, invoiceCount = 0, itemCount = 0;

  Object.keys(mockData).forEach((key) => {
    const d = parseDate(key);
    if (d >= start && d <= end) {
      totalRevenue += mockData[key].totalRevenue;
      invoiceCount += mockData[key].invoiceCount;
      itemCount += mockData[key].itemCount;
    }
  });

  if (totalRevenue === 0) return null;
  return {
    totalRevenue: totalRevenue.toLocaleString('vi-VN') + ' ₫',
    invoiceCount,
    itemCount,
  };
};
