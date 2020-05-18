export class Category {
    getCategory() {
        return localStorage.getItem('category');
    }
    setCategory(category) {
        localStorage.setItem('category', category);
    }
    getAmountOfSelectedCategories() {
        const cat = this.getCategory();
        const len = cat.split(',').length;
        return len;
    }
}
