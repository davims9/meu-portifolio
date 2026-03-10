const searchForm = document.querySelector('#search-form');
const zipInput = document.querySelector('#zip-code-input');
const errorMessage = document.querySelector('#error-message');
const resultsArea = document.querySelector('#results-area');
const showMapButton = document.querySelector('#show-map-button');
const mapContainer = document.querySelector('#map-container');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const zipCode = zipInput.value.replace(/\D/g, '');

    if (zipCode.length !== 8) {
        displayError('CEP inválido! Digite 8 números.');
        return;
    }

    toggleLoading(true);
    resetDisplay();

    try {
        const response = await fetch(`https://cep.awesomeapi.com.br/json/${zipCode}`);
        
        if (!response.ok) {
            throw new Error('CEP inválido!');
        }

        const data = await response.json();
        renderResults(data);

    } catch (err) {
        displayError('CEP inválido!');
    } finally {
        toggleLoading(false);
    }
});

showMapButton.addEventListener('click', () => {
    const lat = document.querySelector('#address-latitude').textContent;
    const lng = document.querySelector('#address-longitude').textContent;
    const iframe = document.querySelector('#map-iframe');
    
    iframe.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=pt&z=14&output=embed`;
    mapContainer.classList.remove('hidden');
});

function renderResults(data) {
    document.querySelector('#address-street').textContent = data.address;
    document.querySelector('#address-neighborhood').textContent = data.district;
    document.querySelector('#address-city').textContent = data.city;
    document.querySelector('#address-state').textContent = data.state;
    document.querySelector('#address-latitude').textContent = data.lat;
    document.querySelector('#address-longitude').textContent = data.lng;

    resultsArea.classList.remove('hidden');
    errorMessage.classList.add('hidden');
}

function displayError(msg) {
    errorMessage.textContent = msg;
    errorMessage.classList.remove('hidden');
    resultsArea.classList.add('hidden');
}

function resetDisplay() {
    resultsArea.classList.add('hidden');
    mapContainer.classList.add('hidden');
    errorMessage.classList.add('hidden');
}

function toggleLoading(active) {
    document.body.classList.toggle('is-loading', active);
}