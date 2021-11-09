$(document).ready( async () => {
    try {
        const respuesta = await fetch(`https://api.github.com/repositories`);
        if (respuesta.status === 200) {
            let datos = await respuesta.json();
            console.log(datos);
            $("#example").dataTable({
                bProcessing: true,
                aaData: datos,
                aoColumns: [
                    { mData: "id" },
                    { mData: "name" },
                    { mData: "description" },
                    { mData: "html_url" },
                ],
            });
        }
    } catch (error) {
        console.log(error);
    }
});
