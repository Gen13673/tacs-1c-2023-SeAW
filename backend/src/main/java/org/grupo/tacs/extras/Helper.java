package org.grupo.tacs.extras;

import org.bouncycastle.jcajce.provider.digest.SHA1;
import org.bouncycastle.util.encoders.Base64;
import org.bouncycastle.util.encoders.Hex;

public class Helper {
    //private static final int ITERATIONS = 100000;

    public static String generarSalt(String salt) {
        if (salt == null || salt.isEmpty()) {
            throw new IllegalArgumentException("Error encoding salt in Base64. Salt cannot be null or empty.");
        }
        // Codificar el salt en Base64
        return new String(Base64.encode(salt.getBytes()));
    }

    public static String obtenerHashConSalt(String password, String salt) {
        // Combinar salt y contraseña
        String passwordWithSalt = generarSalt(salt) + password;

        // Crear instancia del algoritmo SHA1
        SHA1.Digest sha1 = new SHA1.Digest();

        // Aplicar el hash
        sha1.update(passwordWithSalt.getBytes());
        return Hex.toHexString(sha1.digest());
    }

    /**
     * El método {@code obtenerHash(String)} genera un hashCode con el algoritmo de cifrado SHA3.
     * @param password Es el password a cifrar.
     * @return hashCode.
     */
   /*
    public static String obtenerHash(String password){
        SHA3.DigestSHA3 codigoHashSHA3 = new SHA3.DigestSHA3(256);
        codigoHashSHA3.update(password.getBytes());
        return Hex.toHexString(codigoHashSHA3.digest());
    }
    */
}
