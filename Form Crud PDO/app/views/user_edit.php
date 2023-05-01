<h2>atualizar user</h2>

<form action="/user_update" method="POST" role="form">

    <div class="form-group">
        <label for="">Nome</label>
        <input type="hidden" name="id" value="<?=$userEncontrado->id;?>">
        <input type="text" class="form-control" name="name" value="<?=$userEncontrado->name;?>">
    </div>

    <div class="form-group">
        <label for="">Email</label>
        <input type="text" class="form-control" name="email" value="<?=$userEncontrado->email;?>">
    </div>

    <div class="form-group">
        <label for="">Password</label>
        <input type="text" class="form-control" name="password" value="<?=$userEncontrado->password;?>">
    </div>


    <button type="submit" class="btn btn-primary">Cadastrar</button>
</form>