<template>
  <div>
    <div class="row">
      <div class="col-md-3">
        <label for>Nome</label>
        <input type="text" class="form-control" v-model="contact.name" />
      </div>
      <div class="col-md-3">
        <label for>E-mail</label>
        <input type="email" class="form-control" v-model="contact.email"/>
      </div>
      <div class="col-md-3">
        <label for>Telefone</label>
        <input type="phone" class="form-control" v-model="contact.phone"/>
      </div>
     
    </div>
    <div class="row">
      <div class="col-md-12">
        <br />
        <button v-if="mode == 'add'" class="btn btn-primary" @click="add">Salvar</button>
        <button v-if="mode == 'edit'" class="btn btn-primary" @click="update">Editar</button>
        <hr>    
      </div>
    </div>

    <div class="row">
      <div class="col-md-4" v-for="(contact, index) in contacts" :key="contact.id">
        <div class="card" style="">
          <div class="card-body">
            <h5 class="card-title">{{contact.name}}</h5>
            <p class="card-text">email: {{contact.email}}</p>
            <p class="card-text">Telefone: {{contact.phone}}</p>
            <button class="btn btn-warning" @click="edit(index)" >Editar</button>
            <button class="btn btn-danger" @click="remove(index)" >Deletar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "agenda",
  methods: {
      add (){          

          

          this.contacts.push({
              name: this.contact.name,
              email: this.contact.email,
              phone: this.contact.phone
          })   

          this.contact.id    = 0
          this.contact.name  = ''
          this.contact.email = ''
          this.contact.phone = ''
      },
      remove (index) {
          this.contacts.splice(index, 1)
      },
      edit(index){
          this.mode = 'edit'
          this.contact.id    = index
          this.contact.name  = this.contacts[index].name
          this.contact.email = this.contacts[index].email
          this.contact.phone = this.contacts[index].phone
      },
      update(){
          this.mode = "add"

          this.contacts[this.contact.id].name   = this.contact.name  
          this.contacts[this.contact.id].email  = this.contact.email 
          this.contacts[this.contact.id].phone  = this.contact.phone 

          this.contact.id    = 0
          this.contact.name  = ''
          this.contact.email = ''
          this.contact.phone = ''
      }
  },
  data() {
    return {
      mode: 'add',
      contact: {
          id: 0,
          name: '',
          email: '',
          phone: ''
      },
      contacts: [
        {
          id: 1,
          name: "Moises",
          email: "moises@teste",
          phone: "119912344"
        },
        {
          id: 2,
          name: "Joselito",
          email: "joselito@teste",
          phone: "119912344"
        }
      ]
    };
  }
};
</script>