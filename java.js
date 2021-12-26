const select_provinsi = document.querySelector('#select_provinsi');
const select_kota = document.querySelector('#select_kota');
const result = document.querySelector('#result');

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const list = {
    'Sulawesi Utara': `
    <option disabled="disabled" selected="selected">Kota</option>
    <option>Manado</option>
    <option>Kotamobagu</option>
    <option>Bitung</option>
    <option>Tomohon</option>
  `,
    'Sulawesi Tengah': `
    <option disabled="disabled" selected="selected">Kota</option>
    <option>Palu</option>
  `,
    'Sulawesi Selatan': `
    <option disabled="disabled" selected="selected">Kota</option>
    <option>Makassar</option>
    <option>Pare-Pare</option>
    <option>Palopo</option>
  `,
    'Sulawesi Tenggara': `
    <option disabled="disabled" selected="selected">Kota</option>
    <option>Kendari</option>
    <option>Bau-Bau</option>
  `,
    'Gorontalo': `
  <option disabled="disabled" selected="selected">Kota</option>
  <option>Gorontalo</option>
`,
    'Sulawesi Barat': `
    <option disabled="disabled" selected="selected">Kota</option>
    <option>Mamuju</option>
`

}

const func_select_provinsi = () => {
    let provinsi_value = select_provinsi.value;
    select_kota.removeAttribute('disabled');
    select_kota.innerHTML = list[provinsi_value];
    result.innerText = `Pilih Kota`;
}

const func_select_kota = () => {
    let provinsi_value = select_provinsi.value;
    let kota_value = select_kota.value;
    result.innerText = `pada provinsi ${provinsi_value} ada kota ${kota_value}`;
}
select_provinsi.addEventListener('change', func_select_provinsi);
select_kota.addEventListener('change', func_select_kota);