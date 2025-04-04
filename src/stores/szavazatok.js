import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useSzavazoStore = defineStore('szavazatok', () => {
  const temak = ref([])
  const opciok = ref([])
  const url = 'http://localhost:3000'

  const fetchAllTema = async () => {
    try {
      const response = await axios.get(url + '/temak')
      temak.value = response.data
    } catch (e) {
      console.log('error:', e)
    }
  }
  const fetchAllOpciok = async (id) => {
    try {
      const response = await axios.get(url +'/opciok')
      opciok.value = response.data.filter(o => o.temaId == id)
    } catch (e) {
      console.log('error:', e)
    }
  }
  const szavazok =  (id) => {
    axios.post(url + '/szavazatok', {'opcioId': id})
  }
  const loadSzavazatok =  () => {
    axios.get(url + '/szavazatok')
    .then(resp => temak.value = resp.data)
  }

  return { temak, fetchAllTema, fetchAllOpciok, szavazok, loadSzavazatok }
})
