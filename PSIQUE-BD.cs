using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
namespace Bdpmozusihensru
{
    #region Mi_Perfil
    public class Mi_Perfil
    {
        #region Member Variables
        protected string _Nombre_Usuario;
        protected string _Genero;
        protected unknown _Fecha_Nacimiento;
        protected string _Contrasena;
        protected string _Correo;
        protected int _Id_Usuario;
        #endregion
        #region Constructors
        public Mi_Perfil() { }
        public Mi_Perfil(string Genero, unknown Fecha_Nacimiento, string Contrasena, string Correo, int Id_Usuario)
        {
            this._Genero=Genero;
            this._Fecha_Nacimiento=Fecha_Nacimiento;
            this._Contrasena=Contrasena;
            this._Correo=Correo;
            this._Id_Usuario=Id_Usuario;
        }
        #endregion
        #region Public Properties
        public virtual string Nombre_Usuario
        {
            get {return _Nombre_Usuario;}
            set {_Nombre_Usuario=value;}
        }
        public virtual string Genero
        {
            get {return _Genero;}
            set {_Genero=value;}
        }
        public virtual unknown Fecha_Nacimiento
        {
            get {return _Fecha_Nacimiento;}
            set {_Fecha_Nacimiento=value;}
        }
        public virtual string Contrasena
        {
            get {return _Contrasena;}
            set {_Contrasena=value;}
        }
        public virtual string Correo
        {
            get {return _Correo;}
            set {_Correo=value;}
        }
        public virtual int Id_Usuario
        {
            get {return _Id_Usuario;}
            set {_Id_Usuario=value;}
        }
        #endregion
    }
    #endregion
}