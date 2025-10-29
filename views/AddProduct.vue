const AddProduct = {
    name: 'AddProduct',

    data: function() {

    },

    methods: {

    },

    computed: {

    },

    template: `
      <main>
        <div class="q-gutter-md" style="max-width: 300px">
          <q-form class="q-gutter-md">
            <q-input v-model="text" label="Standard" />
            <q-input
                label="Your name *"
                hint="Name and surname"/>
            <q-input
                type="number"
                label="Your age *"
            />
            <q-toggle label="I accept the license and terms" />
            <div>
              <q-btn label="Submit" type="submit" color="primary" />
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        </div>
      </main>
    `,
};
export default AddProduct;