import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useTemaStore = defineStore('szavazatok', () => {
  const temak = ref([])
  const opciok = ref([])

  const fetchAllTema = async () => {
    try {
      const response = await axios.get('http://localhost:3000/temak')
      temak.value = response.data
    } catch (e) {
      console.log('error:', e)
    }
  }
  const fetchAllOpciok = async (id) => {
    try {
      const response = await axios.get('http://localhost:3000/opciok')
      opciok.value = response.data.filter(o => o.temaId == id)
    } catch (e) {
      console.log('error:', e)
    }
  }

  return { temak, fetchAllTema }
})
