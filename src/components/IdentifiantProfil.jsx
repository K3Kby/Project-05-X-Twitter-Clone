function IdentifiantSide ({Identifiant}){
    return( 
<div className="identifiant-Side-Bar">
    <div>
<img src={Identifiant.src} alt="" />
    </div>
    <div>
<p>
    {Identifiant.name}
</p>
<p>
    {Identifiant.nickname}
</p>
<span>{Identifiant.pseudo} </span>
    </div>
</div>
    );
}

export default IdentifiantSide;