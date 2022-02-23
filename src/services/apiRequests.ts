import api from './api'

const loadProductsData = {
    async loadProductByStatus() {
        const productByStatus = await api.get("/products-by-status")
                                    .then(response => response.data.data)
        
        return productByStatus
    }
}

export default loadProductsData