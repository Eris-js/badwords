import fs from 'fs/promises';

(async () => {
    try {
        // Đọc file JSON
        const text = await fs.readFile('./src/lib/language/english.json', 'utf-8');
        const jsonData = JSON.parse(text);

        // Sắp xếp dữ liệu và loại bỏ các từ trùng nhau
        const sortedUniqueData = [...new Set(jsonData)].sort();

        // Ghi dữ liệu đã sắp xếp và loại bỏ từ trùng vào một file mới
        await fs.writeFile('./src/lib/language/sorted_unique_english.json', JSON.stringify(sortedUniqueData, null, 2), 'utf-8');

        console.log('Dữ liệu đã được sắp xếp và loại bỏ từ trùng và lưu vào file sorted_unique_english.json');
    } catch (error) {
        console.error('Lỗi khi đọc hoặc ghi file:', error);
    }
})();
