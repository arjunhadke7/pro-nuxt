<template>
   <div class="container w-2/5 mx-auto">
        <div class="maindiv block relative h-full ">
            <div class="imgdiv ">
                <img class=""
                    src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="example">
            </div>
            <div class="info absolute hidden top-2/4 left-0 text-center text-white">
                <h2 class="text-lg text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sit
                    a labore vel doloremque tempora optio delectus recusandae veritatis at!</h2>
                    <button class="border-2 mx-1 border-black px-4 py-2 text-black mt-2
                    hover:bg-gray-500 hover:text-white 
                    ">
                        Read more
                    </button>
                    <button class="border-2 border-black px-4 py-2 text-black mt-2
                    hover:bg-gray-500 hover:text-white 
                    ">
                        See how
                    </button>
            </div>
        </div>
       

    </div>

</template>


<style>
.maindiv:hover .info {
    display: block;

}

.maindiv:hover .imgdiv {
    opacity: 0.2;
}
</style>